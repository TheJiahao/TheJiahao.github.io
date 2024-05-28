import { expect } from "@playwright/test";
import test from "./utils/fixtures";

test.describe("Homepage", () => {
    test("can be accessed", async ({ homepage }) => {
        await homepage.goto();
    });

    test("has correct title", async ({ homepage, page }) => {
        await homepage.goto();
        await expect(page).toHaveTitle("Jiahao 的博客");
    });
});
