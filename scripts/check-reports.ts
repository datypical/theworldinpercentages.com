import { writeFileSync } from "node:fs";
import { chromium } from "@playwright/test";
import type { Browser, Page } from "@playwright/test";
import { STEPS } from "../src/lib/data/Steps.ts";
import type { MonitorConfig } from "../src/lib/types/data.ts";

type CheckStatus =
    | "UPDATE_FOUND"
    | "NO_UPDATE"
    | "MANUAL_CHECK"
    | "MANUAL_REVIEW"
    | "NETWORK_ERROR"
    | "CONFIG_INVALID"
    | "ERROR";

interface CheckResult {
    name: string;
    url: string;
    status: CheckStatus;
    details: string;
}

interface LoadedPage {
    statusCode: number;
    statusText: string;
    url: string;
    content: string;
}

const MAX_ATTEMPTS = 3;
const MIN_VALID_YEAR = 2000;
const REQUEST_TIMEOUT_MS = 45000;
const SETTLE_TIMEOUT_MS = 8000;

const CHALLENGE_MARKERS = [
    "just a moment",
    "cf-chl-",
    "challenge-platform",
    "verify you are human",
    "attention required",
    "captcha",
    "enable javascript and cookies",
    "checking your browser",
];

const NOT_FOUND_MARKERS = [
    "page not found",
    "404 not found",
    "404 error",
    "the page you requested",
    "page you are looking for",
    "does not exist",
    "no longer available",
    "página no encontrada",
    "no encontrado",
];

const STATUS_ORDER: Record<CheckStatus, number> = {
    UPDATE_FOUND: 0,
    MANUAL_CHECK: 1,
    MANUAL_REVIEW: 2,
    NETWORK_ERROR: 3,
    CONFIG_INVALID: 4,
    ERROR: 5,
    NO_UPDATE: 6,
};

function isActionable(result: CheckResult): boolean {
    return result.status !== "NO_UPDATE" && result.status !== "MANUAL_REVIEW";
}

function describeError(error: unknown): string {
    const rawMessage = error instanceof Error ? error.message : String(error);
    const firstLine = rawMessage.split("\n")[0].trim();

    if (/timeout .*exceeded/i.test(firstLine)) {
        return "Timeout: the site did not respond in time";
    }
    if (/ERR_NAME_NOT_RESOLVED|ERR_NAME_RESOLUTION_FAILED/i.test(firstLine)) {
        return "DNS error: the domain could not be resolved";
    }
    if (/ERR_CONNECTION_(REFUSED|RESET|CLOSED|ABORTED)/i.test(firstLine)) {
        return "Connection error: the site refused or dropped the connection";
    }
    if (/ERR_CERT|SSL|TLS/i.test(firstLine)) {
        return "TLS error: certificate could not be verified";
    }
    if (/ERR_TOO_MANY_REDIRECTS/i.test(firstLine)) {
        return "Redirect loop: too many redirects";
    }
    if (/ERR_INVALID_URL|Cannot navigate to invalid URL/i.test(firstLine)) {
        return "Invalid URL: the monitor points to a malformed address";
    }

    return firstLine;
}

function isChallengePage(url: string, content: string): boolean {
    const haystack = `${url} ${content}`.toLowerCase();
    return CHALLENGE_MARKERS.some((marker) => haystack.includes(marker));
}

function isNotFoundPage(content: string): boolean {
    const haystack = content.toLowerCase();
    return NOT_FOUND_MARKERS.some((marker) => haystack.includes(marker));
}

function isBlocked(loaded: LoadedPage): boolean {
    return (
        loaded.statusCode === 403 ||
        loaded.statusCode === 429 ||
        loaded.statusCode === 503 ||
        isChallengePage(loaded.url, loaded.content)
    );
}

function blockDetails(loaded: LoadedPage): string {
    if (isChallengePage(loaded.url, loaded.content)) {
        return `Bot challenge detected (HTTP ${loaded.statusCode})`;
    }
    return `Access blocked by the site (HTTP ${loaded.statusCode})`;
}

async function loadPage(page: Page, url: string): Promise<LoadedPage> {
    let lastError: unknown;

    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
        try {
            const response = await page.goto(url, {
                waitUntil: "domcontentloaded",
                timeout: REQUEST_TIMEOUT_MS,
            });

            await page
                .waitForLoadState("networkidle", { timeout: SETTLE_TIMEOUT_MS })
                .catch(() => {});
            await page.waitForTimeout(750);

            const snapshot = await page.evaluate(() => ({
                url: window.location.href,
                content: document.body?.innerText ?? "",
            }));

            return {
                statusCode: response?.status() ?? 0,
                statusText: response?.statusText() ?? "",
                url: snapshot.url,
                content: snapshot.content,
            };
        } catch (error) {
            lastError = error;
            if (attempt < MAX_ATTEMPTS) {
                await page.waitForTimeout(1500 * attempt);
            }
        }
    }

    throw lastError instanceof Error ? lastError : new Error(String(lastError));
}

async function runCheck(
    page: Page,
    monitor: MonitorConfig,
    url: string,
    classify: (
        loaded: LoadedPage,
    ) => Pick<CheckResult, "status" | "details"> & { url?: string },
    fallbackUrl?: string,
): Promise<CheckResult> {
    try {
        const loaded = await loadPage(page, url);
        const { status, details, url: resolvedUrl } = classify(loaded);
        return {
            name: monitor.name,
            url: resolvedUrl ?? url,
            status,
            details,
        };
    } catch (error) {
        return {
            name: monitor.name,
            url: fallbackUrl ?? url,
            status: "NETWORK_ERROR",
            details: describeError(error),
        };
    }
}

function configInvalid(
    monitor: MonitorConfig,
    url: string,
    details: string,
): CheckResult {
    return {
        name: monitor.name,
        url,
        status: "CONFIG_INVALID",
        details,
    };
}

function extractYears(content: string, pattern: RegExp): number[] {
    const flags = pattern.flags.includes("g") ? pattern.flags : `${pattern.flags}g`;
    const globalPattern = new RegExp(pattern.source, flags);
    const maxYear = new Date().getFullYear() + 2;
    const years = new Set<number>();

    for (const match of content.matchAll(globalPattern)) {
        const year = Number(match[1]);
        if (Number.isInteger(year) && year >= MIN_VALID_YEAR && year <= maxYear) {
            years.add(year);
        }
    }

    return [...years];
}

async function checkUrlIncrement(
    page: Page,
    monitor: Extract<MonitorConfig, { checkType: "url_increment" }>,
): Promise<CheckResult> {
    if (!monitor.baseUrl.includes("{year}")) {
        return configInvalid(
            monitor,
            monitor.baseUrl,
            "baseUrl must contain the {year} token",
        );
    }

    const target = String(monitor.latestPublishedYear + 1);
    const url = monitor.baseUrl.replace("{year}", target);
    const currentUrl = monitor.baseUrl.replace(
        "{year}",
        String(monitor.latestPublishedYear),
    );

    return runCheck(
        page,
        monitor,
        url,
        (loaded) => {
            if (isBlocked(loaded)) {
                return {
                    status: "MANUAL_CHECK",
                    details: blockDetails(loaded),
                    url: currentUrl,
                };
            }

            const hasTargetYear = loaded.content.includes(target);
            const notPublished =
                loaded.statusCode === 404 ||
                loaded.statusCode === 410 ||
                (!hasTargetYear && isNotFoundPage(loaded.content));

            if (notPublished) {
                return {
                    status: "NO_UPDATE",
                    details: `No new edition (latest: ${monitor.latestPublishedYear})`,
                    url: currentUrl,
                };
            }

            if (loaded.statusCode >= 200 && loaded.statusCode < 300) {
                return {
                    status: "UPDATE_FOUND",
                    details: `New edition detected (${target})`,
                };
            }

            return {
                status: "ERROR",
                details:
                    `Unexpected HTTP ${loaded.statusCode} ${loaded.statusText}`.trim(),
            };
        },
        currentUrl,
    );
}

async function checkPageYear(
    page: Page,
    monitor: Extract<MonitorConfig, { checkType: "page_year" }>,
): Promise<CheckResult> {
    let pattern: RegExp;
    try {
        pattern = new RegExp(monitor.yearPattern, monitor.yearPatternFlags ?? "i");
    } catch (error) {
        return configInvalid(
            monitor,
            monitor.url,
            `Invalid yearPattern: ${describeError(error)}`,
        );
    }

    return runCheck(page, monitor, monitor.url, (loaded) => {
        if (isBlocked(loaded)) {
            return {
                status: "MANUAL_CHECK",
                details: blockDetails(loaded),
            };
        }

        if (
            loaded.statusCode === 404 ||
            loaded.statusCode === 410 ||
            isNotFoundPage(loaded.content)
        ) {
            return {
                status: "NO_UPDATE",
                details: `Page unreachable (HTTP ${loaded.statusCode})`,
            };
        }

        if (loaded.statusCode < 200 || loaded.statusCode >= 300) {
            return {
                status: "ERROR",
                details:
                    `Unexpected HTTP ${loaded.statusCode} ${loaded.statusText}`.trim(),
            };
        }

        const years = extractYears(loaded.content, pattern);

        if (years.length === 0) {
            return {
                status: "ERROR",
                details:
                    "No edition year matched yearPattern (the site layout may have changed)",
            };
        }

        const latestYear = Math.max(...years);

        if (latestYear > monitor.latestPublishedYear) {
            return {
                status: "UPDATE_FOUND",
                details: `New edition detected (${latestYear})`,
            };
        }

        return {
            status: "NO_UPDATE",
            details: `No new edition (latest: ${monitor.latestPublishedYear})`,
        };
    });
}

function checkManual(
    monitor: Extract<MonitorConfig, { checkType: "manual" }>,
): CheckResult {
    return {
        name: monitor.name,
        url: monitor.url,
        status: "MANUAL_REVIEW",
        details: monitor.current ? `Current edition ${monitor.current}` : "",
    };
}

function checkMonitor(page: Page, monitor: MonitorConfig): Promise<CheckResult> {
    switch (monitor.checkType) {
        case "url_increment":
            return checkUrlIncrement(page, monitor);
        case "page_year":
            return checkPageYear(page, monitor);
        case "manual":
            return Promise.resolve(checkManual(monitor));
    }
}

function renderAction(result: CheckResult): string {
    const suffix = result.details ? ` | ${result.details}` : "";
    return `- [**${result.name}**](${result.url})${suffix}`;
}

function renderLink(result: CheckResult): string {
    return `[${result.name}](${result.url})`;
}

function buildReport(results: CheckResult[]): string {
    const ordered = [...results].sort(
        (a, b) => STATUS_ORDER[a.status] - STATUS_ORDER[b.status],
    );
    const actionable = ordered.filter(isActionable);
    const reviews = ordered.filter((result) => result.status === "MANUAL_REVIEW");
    const upToDate = ordered.filter((result) => result.status === "NO_UPDATE");
    const updates = results.filter((result) => result.status === "UPDATE_FOUND");

    const summary = [
        `**${updates.length}** update(s)`,
        ...(actionable.length > updates.length
            ? [`**${actionable.length}** requiring attention`]
            : []),
        `**${reviews.length}** manual review(s)`,
        `**${upToDate.length}** up to date`,
        `**${results.length}** monitored`,
    ].join(" · ");

    const lines = ["## Report monitoring status", "", summary];

    if (actionable.length > 0) {
        const heading = actionable.every((result) => result.status === "UPDATE_FOUND")
            ? "### Update"
            : "### Action required";

        lines.push("", heading, "", ...actionable.map(renderAction));
    }

    if (reviews.length > 0) {
        lines.push("", "### Manual review", "", ...reviews.map(renderAction));
    }

    if (upToDate.length > 0) {
        lines.push("", "### Up to date", "", upToDate.map(renderLink).join(" · "));
    }

    lines.push("");
    return lines.join("\n");
}

async function main(): Promise<void> {
    const monitors = STEPS.flatMap((step) => (step.monitor ? [step.monitor] : []));
    const results: CheckResult[] = [];

    let browser: Browser;
    try {
        browser = await chromium.launch({
            headless: true,
            args: [
                "--no-sandbox",
                "--disable-setuid-sandbox",
                "--disable-dev-shm-usage",
                "--disable-blink-features=AutomationControlled",
            ],
        });
    } catch (error) {
        console.error(`Failed to launch Chromium: ${describeError(error)}`);
        process.exit(1);
    }

    const context = await browser.newContext({
        userAgent:
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
        locale: "en-US",
        extraHTTPHeaders: {
            "Accept-Language": "en-US,en;q=0.9",
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
        },
    });

    await context.addInitScript(
        "Object.defineProperty(navigator, 'webdriver', {get: () => undefined})",
    );

    const page = await context.newPage();

    await page.route("**/*", (route) => {
        const type = route.request().resourceType();
        if (type === "image" || type === "media" || type === "font") {
            return route.abort();
        }
        return route.continue();
    });

    try {
        for (const [index, monitor] of monitors.entries()) {
            const displayUrl =
                monitor.checkType === "url_increment" ? monitor.baseUrl : monitor.url;

            console.log(`Checking: ${monitor.name} -> ${displayUrl}`);
            const result = await checkMonitor(page, monitor);
            results.push(result);
            console.log(`  [${result.status}] ${result.details}`);

            const isLast = index === monitors.length - 1;
            if (monitor.checkType === "manual" || isLast) {
                continue;
            }

            const delay = Math.floor(Math.random() * 1500) + 1500;
            await page.waitForTimeout(delay);
        }
    } finally {
        await browser.close();
    }

    writeFileSync("updates-found.md", buildReport(results), "utf-8");

    const updates = results.filter((result) => result.status === "UPDATE_FOUND").length;
    const actionable = results.filter(isActionable).length;

    console.log(`\n${updates} update(s), ${actionable} requiring attention.`);
    console.log("Report written to updates-found.md");
}

main().catch((error) => {
    console.error(describeError(error));
    process.exit(1);
});
