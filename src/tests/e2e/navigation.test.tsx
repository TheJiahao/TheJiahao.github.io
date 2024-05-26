import test, { expect, type Locator } from "@playwright/test";

test.describe("Navigation", () => {
    let navigationBar: Locator;

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
        navigationBar = page.getByRole("navigation");
    });

    test("only one navigation bar exists", async () => {
        expect(navigationBar).toBeDefined();

        await expect(navigationBar).toHaveCount(1);
    });

    test("has link to homepage", async ({ page }) => {
        const link = navigationBar.getByRole("link", { name: "首页" });

        await link.click();

        await expect(page).toHaveURL(/\/zh-cn\/?/);
    });

    test("has link to posts page", async ({ page }) => {
        const link = navigationBar.getByRole("link", { name: "归档" });

        await link.click();

        await expect(page).toHaveURL(/\/posts\/?/);
    });

    test("has link to about page", async ({ page }) => {
        const link = navigationBar.getByRole("link", { name: "关于" });

        await link.click();

        await expect(page).toHaveURL(/\/about\/?/);
    });
});
