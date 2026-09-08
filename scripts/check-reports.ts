import { writeFileSync } from "node:fs";
import { chromium } from "@playwright/test";
import type { Browser, Page } from "@playwright/test";
import { STEPS } from "../src/lib/data/Steps.ts";
import type { MonitorConfig, Step } from "../src/lib/types/data.ts";

type StepWithUrlIncrementMonitor = Step & {
    monitor: MonitorConfig & { checkType: "url_increment" };
};

function hasUrlIncrementMonitor(step: Step): step is StepWithUrlIncrementMonitor {
    return step.monitor?.checkType === "url_increment";
}

const CHALLENGE_MARKERS = [
    "just a moment",
    "cf-chl-",
    "challenge-platform",
    "verify you are human",
    "attention required",
    "captcha",
    "enable javascript and cookies",
];

function isChallengePage(url: string, content: string): boolean {
    const haystack = `${url} ${content}`.toLowerCase();
    return CHALLENGE_MARKERS.some((marker) => haystack.includes(marker));
}

function errorMessage(error: unknown): string {
    return error instanceof Error ? error.message : String(error);
}

async function checkUrl(
    page: Page,
    url: string,
): Promise<{ status: number; detected: boolean; challenge: boolean } | null> {
    try {
        const response = await page.goto(url, {
            waitUntil: "domcontentloaded",
            timeout: 60000,
        });
        const status = response ? response.status() : 0;

        await page.waitForTimeout(4000);
        await page.waitForLoadState("networkidle", { timeout: 20000 }).catch(() => {});
        await page.waitForTimeout(1500);

        const result = await page.evaluate(() => {
            return {
                url: window.location.href,
                content: document.body?.innerText ?? "",
            };
        });

        const challenge = isChallengePage(result.url, result.content);
        if (challenge) {
            return { status, detected: false, challenge: true };
        }

        const detected =
            status >= 200 &&
            status < 300 &&
            !result.content.toLowerCase().includes("page not found");

        return { status, detected, challenge: false };
    } catch (error) {
        console.error(`[Error] Failed to check ${url}: ${errorMessage(error)}`);
        return null;
    }
}

async function main() {
    const updates: string[] = [];
    const monitors = STEPS.filter(hasUrlIncrementMonitor);

    let browser: Browser;
    try {
        browser = await chromium.launch({
            headless: true,
            args: ["--no-sandbox", "--disable-blink-features=AutomationControlled"],
        });
    } catch (error) {
        console.error(
            `Could not launch Chromium: ${errorMessage(error)}\nInstall it with: pnpm exec playwright install chromium`,
        );
        process.exit(1);
    }

    const context = await browser.newContext({
        userAgent:
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
        locale: "en-US",
    });
    const page = await context.newPage();

    for (const step of monitors) {
        const monitor = step.monitor;
        const nextYear = monitor.latestPublishedYear + 1;
        const targetUrl = monitor.baseUrl.replace("{year}", String(nextYear));

        const result = await checkUrl(page, targetUrl);

        if (!result) {
            await page.waitForTimeout(1500);
            continue;
        }

        const statusLabel = result.status ? `HTTP ${result.status}` : "no status";
        const verdict = result.challenge
            ? "blocked by bot protection"
            : result.detected
              ? "update found"
              : "not found";
        console.log(`[${monitor.name}] ${targetUrl} -> ${statusLabel} (${verdict})`);

        if (result.detected) {
            updates.push(
                `- **${monitor.name}**: [${nextYear}](${targetUrl}) edition detected.`,
            );
        } else if (result.challenge) {
            console.log(
                `[Warning] ${targetUrl} is behind a bot challenge; could not verify.`,
            );
        }

        await page.waitForTimeout(1000);
    }

    await browser.close();

    if (updates.length > 0) {
        const content = "## New report editions detected\n\n" + updates.join("\n\n");

        writeFileSync("updates-found.md", content, "utf-8");
        console.log(
            `Found ${updates.length} ${updates.length === 1 ? "update" : "updates"}. updates-found.md generated.`,
        );
    } else {
        console.log("No new reports detected.");
    }
}

main();
