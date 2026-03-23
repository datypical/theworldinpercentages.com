import { expect, test } from "@playwright/test";

test.describe("The World in Percentages - End to End", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("homepage loads main elements and language changes", async ({ page }) => {
        await expect(page.locator("main.l-container")).toBeVisible();
        await expect(page.locator(".chart-container")).toBeVisible();

        await page.goto("/es");
        await expect(page.locator("h1.page-title")).toContainText("El mundo", {
            timeout: 10000,
        });
    });

    test("filters functionality updates categories correctly", async ({ page }) => {
        const categorySelect = page.locator("#category-mode");
        await categorySelect.selectOption("energy");
        await expect(categorySelect).toHaveValue("energy");
        await expect(page.locator(".chart-container")).toBeVisible();
    });

    test("contribution modal renders and supports submission", async ({ page }) => {
        const proposeBtn = page.locator(".btn-collaborate");
        await proposeBtn.click();

        const dialog = page.locator(".modal-content");
        await expect(dialog).toBeVisible();

        await dialog
            .locator('input[name="question"]')
            .fill("How many people use Playwright?");
        await dialog.locator('input[name="percentage"]').fill("5");

        const form = dialog.locator("form");
        await expect(form).toHaveAttribute("action", "?/suggest");

        await dialog.locator("button", { hasText: /Cancel|Cancelar/i }).click();
        await expect(dialog).not.toBeVisible();
    });

    test("active cells count matches rounded percentage", async ({ page }) => {
        const percentageHeading = page.locator(".chart-container .stats h2");
        await expect(percentageHeading).toBeVisible();

        const text = await percentageHeading.innerText();
        const floatVal = parseFloat(text.replace("%", "").trim());
        const expectedActive = Math.round(floatVal);

        await page.waitForTimeout(500);

        const activeCount = await page.evaluate(() => {
            const cells = Array.from(
                document.querySelectorAll(".waffle-cell-group rect"),
            );
            return cells.filter((c) => {
                const fill = c.getAttribute("fill");
                const emptyColor = document.documentElement.className.includes(
                    "light-theme",
                )
                    ? "#e0e0e0"
                    : "#2a2a2a";
                return fill && fill !== "var(--empty-fill)" && fill !== "#e0e0e0";
            }).length;
        });

        expect(activeCount).toBe(expectedActive);
    });
});
