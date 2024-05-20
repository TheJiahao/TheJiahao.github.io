import test, { expect, type Locator } from "@playwright/test";

test.describe("Homepage", () => {
    test("can be accessed", async ({ page }) => {
        await page.goto("/");
    });

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("has correct title", async ({ page }) => {
        await expect(page).toHaveTitle("Jiahao 的博客");
    });

    test.describe("navigation bar", () => {
        let navigationBar: Locator;

        test.beforeEach(async ({ page }) => {
            navigationBar = page.getByRole("navigation");
        });

        test("exists", async () => {
            expect(navigationBar).toBeDefined();

            await expect(navigationBar).toHaveCount(1);
        });

        test("has link to homepage", async () => {
            const link = navigationBar
                .getByRole("link")
                .filter({ hasText: "首页" });

            expect(link).toBeDefined();
            await expect(link).toHaveAttribute("href", "/");
        });

        test("has link to posts page", async () => {
            const link = navigationBar
                .getByRole("link")
                .filter({ hasText: "归档" });

            expect(link).toBeDefined();
            await expect(link).toHaveAttribute("href", "/posts");
        });

        test("has link to about page", async () => {
            const link = navigationBar
                .getByRole("link")
                .filter({ hasText: "关于" });

            expect(link).toBeDefined();
            await expect(link).toHaveAttribute("href", "/about");
        });
    });
});
