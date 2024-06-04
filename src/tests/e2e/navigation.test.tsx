import { expect, type Locator } from "@playwright/test";
import test from "./utils/fixtures";

test.describe("Navigation", () => {
    let navigationBar: Locator;

    test.beforeEach(async ({ homepage, page }) => {
        await homepage.goto();
        navigationBar = page.getByRole("navigation");
    });

    test("only one navigation bar exists", async () => {
        expect(navigationBar).toBeDefined();

        await expect(navigationBar).toHaveCount(1);
    });

    test.describe("navigation menu", { tag: "@desktop" }, () => {
        test("has links", async () => {
            await expect(navigationBar.getByRole("link")).not.toHaveCount(0);
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

    test.describe("navigation toolbar", { tag: "@mobile" }, () => {
        let navigationToolBar: Locator;
        let expandButton: Locator;

        test.beforeEach(({ page }) => {
            navigationToolBar = page.getByRole("menubar");
            expandButton = navigationToolBar.getByRole("button", {
                name: "显示导航菜单",
            });
        });

        test("is visible", async () => {
            await expect(navigationToolBar).toBeVisible();
        });

        test("has expand button", async () => {
            await expect(expandButton).toBeVisible();
        });

        test.describe("before clicking expand button", () => {
            test("navigation menu is hidden", async () => {
                await expect(navigationBar.getByRole("menu")).toBeHidden();
            });
        });

        test.describe("clicking expand button", () => {
            test.beforeEach(async () => {
                await expandButton.click();
            });

            test("shows navigation menu", async () => {
                await expect(navigationBar.getByRole("menu")).toBeVisible();
            });

            test("navigation menu is not empty", async () => {
                await expect(
                    navigationBar.getByRole("menuitem"),
                ).not.toHaveCount(0);
            });

            test("twice hides navigation menu", async () => {
                await expandButton.click();

                await expect(navigationBar.getByRole("menu")).toBeHidden();
            });
        });
    });
});
