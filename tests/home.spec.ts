import { expect, test } from "@playwright/test";

test("homepage has expected elements and displays percentages", async ({ page }) => {
    // Homepage
    await page.goto("/");

    // Title is visible
    // The main container is visible
    await expect(page.locator("main.l-container")).toBeVisible();

    // Chart container is rendered
    await expect(page.locator(".chart-container")).toBeVisible();

    // Percentage displayed in an h2
    const percentageHeading = page.locator(".chart-container .stats h2");
    await expect(percentageHeading).toBeVisible();
    await expect(percentageHeading).toContainText("%");
});
