import test, { expect } from "@playwright/test";

test.describe("Homepage", () => {
    test("can be accessed", async ({ page }) => {
        await page.goto("/");
    });

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("has a title", async ({ page }) => {
        await expect(page).toHaveTitle("Jiahao 的博客");
    });
});
