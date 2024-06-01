import { expect } from "@playwright/test";
import { waitForDebugger } from "inspector";
import test from "./utils/fixtures";

test.describe("Language selection", () => {
    test.beforeEach(async ({ homepage }) => {
        await homepage.goto();
    });

    test("language can be changed to English", async ({ homepage, page }) => {
        await homepage.selectLanguage("English");

        const navigationBar = page.getByRole("navigation");

        await expect(
            navigationBar.getByRole("link"),
            "to be translated",
        ).toContainText(["Home", "About"]);
    });

    test("language can be changed back to Chinese", async ({
        homepage,
        page,
    }) => {
        await homepage.selectLanguage("English");
        await page.waitForURL(/\/en?\//)
        await homepage.selectLanguage("简体中文");

        const navigationBar = page.getByRole("navigation");

        await expect(
            navigationBar.getByRole("link"),
            "to be translated",
        ).toContainText(["首页", "关于"]);
    });
});
