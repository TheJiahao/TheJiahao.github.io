import test, { expect } from "@playwright/test";

test.describe("Homepage", () => {
    test("can be accessed", async ({ page }) => {
        await page.goto("/");
    });

    test("has correct title", async ({ page }) => {
        await page.goto("/");
        await expect(page).toHaveTitle("Jiahao 的博客");
    });
});
