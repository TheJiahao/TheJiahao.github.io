import { expect } from "@playwright/test";
import { languageCodes } from "localization";
import test from "tests/e2e/utils/fixtures";

test.describe("Social links", () => {
    for (const languageCode of languageCodes) {
        test.describe(`in ${languageCode} site`, () => {
            test.use({ languageCode });

            test.beforeEach(async ({ homepage, isMobile }) => {
                await homepage.goto();

                if (isMobile) {
                    await homepage.toggleMenu();
                }
            });

            for (const socialLink of ["GitHub", "RSS"]) {
                test(`has ${socialLink} link`, async ({ page }) => {
                    await expect(
                        page.getByRole("link", { name: socialLink }),
                    ).toBeVisible();
                });
            }
        });
    }
});
