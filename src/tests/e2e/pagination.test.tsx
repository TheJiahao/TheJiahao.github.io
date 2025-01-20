import { expect, type Locator } from "@playwright/test";
import { languageCodes } from "localization";
import { getTranslation } from "utils/getTranslation";
import test from "./utils/fixtures";

test.describe("Pagination", () => {
    for (const languageCode of languageCodes) {
        test.describe(`in ${languageCode} homepage`, () => {
            test.use({ languageCode });
            let pagination: Locator;

            test.beforeEach(async ({ homepage }) => {
                await homepage.goto();
                pagination = homepage.page
                    .getByRole("contentinfo")
                    .getByRole("navigation");
            });

            test("exists", async () => {
                await expect(pagination).toBeVisible();
            });

            test("link to previous page is disabled", async () => {
                const previousPageLink = pagination.getByRole("link", {
                    name: getTranslation(languageCode).previousPage,
                });

                await expect(previousPageLink).toBeDisabled();
            });
        });
    }
});
