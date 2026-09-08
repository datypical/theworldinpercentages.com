import { writeFileSync } from "node:fs";
import { STEPS } from "../src/lib/data/Steps.ts";
import type { MonitorConfig, Step } from "../src/lib/types/data.ts";

type StepWithUrlIncrementMonitor = Step & {
    monitor: MonitorConfig & { checkType: "url_increment" };
};

function hasUrlIncrementMonitor(step: Step): step is StepWithUrlIncrementMonitor {
    return step.monitor?.checkType === "url_increment";
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchWithTimeout(url: string, timeoutMs = 20000): Promise<Response> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
        return await fetch(url, {
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            },
            signal: controller.signal,
        });
    } finally {
        clearTimeout(timer);
    }
}

async function fetchWithRetry(
    url: string,
    retries = 3,
    timeoutMs = 20000,
): Promise<Response | null> {
    for (let i = 0; i < retries; i++) {
        try {
            return await fetchWithTimeout(url, timeoutMs);
        } catch (error: any) {
            const isLastAttempt = i === retries - 1;
            if (isLastAttempt) {
                console.log(`[Aborted] All ${retries} attempts failed for ${url}.`);
                return null;
            }

            console.log(
                `[Warning] Attempt ${i + 1} failed for ${url}. Retrying in 3 seconds...`,
            );
            await delay(3000);
        }
    }
    return null;
}

async function main() {
    const updates: string[] = [];

    const monitors = STEPS.filter(hasUrlIncrementMonitor);

    for (const step of monitors) {
        const monitor = step.monitor;
        const nextYear = monitor.latestPublishedYear + 1;
        const targetUrl = monitor.baseUrl.replace("{year}", String(nextYear));

        try {
            const response = await fetchWithRetry(targetUrl);

            if (!response) {
                await delay(1000);
                continue;
            }

            if (response.ok) {
                const text = await response.text();
                if (!text.toLowerCase().includes("page not found")) {
                    updates.push(
                        `- **${monitor.name}**: [${nextYear}](${targetUrl}) edition detected.`,
                    );
                }
            }
        } catch (error) {
            console.error(`Unexpected error processing ${monitor.name}:`, error);
        }

        await delay(1000);
    }

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
