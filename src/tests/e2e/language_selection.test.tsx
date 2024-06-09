import { expect } from "@playwright/test";
import test from "./utils/fixtures";

test.describe("Language selection", () => {
    test.beforeEach(async ({ homepage }) => {
        await homepage.goto();
    });

    test("language can be changed to English", async ({ homepage, page }) => {
        await homepage.selectLanguage("English");

        await expect(page).toHaveURL(/en?\//);
    });

    test("language can be changed back to Chinese", async ({
        homepage,
        page,
    }) => {
        await page.goto("/en");

        await homepage.selectLanguage("简体中文");

        await expect(page).toHaveURL(/zh-cn?\//);
    });
});
