import { expect } from "@playwright/test";
import { languageCodes } from "localization";
import { getTranslation } from "utils/getTranslation";
import test from "./utils/fixtures";

test.describe("Search", () => {
    for (const languageCode of languageCodes) {
        test.describe(`in ${languageCode} site`, { tag: "@desktop" }, () => {
            test.use({ languageCode });

            test.beforeEach(async ({ homepage }) => {
                await homepage.goto();
            });

            test("with keyword of existing blog", async ({
                homepage,
                page,
            }) => {
                const keyword = "Code";

                await homepage.search(keyword);

                const searchResults = page.getByRole("list", {
                    name: getTranslation(languageCode).searchResults,
                });

                await expect(searchResults).toContainText(keyword);
            });

            test("with invalid keyword", async ({ homepage, page }) => {
                const keyword = "this keyword should not return any result";

                await homepage.search(keyword);

                const searchResults = page.getByRole("list", {
                    name: getTranslation(languageCode).searchResults,
                });

                await expect(searchResults).toBeEmpty();
            });
        });
    }
});
