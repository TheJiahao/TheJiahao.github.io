import { expect } from "@playwright/test";
import { languageCodes } from "localization";
import { getTranslation } from "utils/getTranslation";
import test from "./utils/fixtures";

test.describe("Language selection", () => {
    for (const languageCode of languageCodes) {
        test.describe(`in ${languageCode} site`, () => {
            test.use({ languageCode });

            test.beforeEach(async ({ homepage }) => {
                await homepage.goto();
            });

            for (const targetLanguage of languageCodes.filter(
                (target) => target !== languageCode,
            )) {
                test(`language can be changed to ${targetLanguage}`, async ({
                    homepage,
                    page,
                }) => {
                    await homepage.selectLanguage(
                        getTranslation(targetLanguage).name,
                    );

                    await expect(page).toHaveURL(
                        RegExp(`/${targetLanguage}/?$`),
                    );
                });
            }
        });
    }
});
