import { expect, type Locator } from "@playwright/test";
import { languageCodes } from "localization";
import { getTranslation } from "utils/getTranslation";
import test from "./utils/fixtures";

test.describe("Projects page", () => {
    for (const languageCode of languageCodes) {
        test.describe(`in ${languageCode} site`, () => {
            test.use({ languageCode });

            test.beforeEach(async ({ homepage }) => {
                await homepage.goto();
            });

            test("can be accessed", async ({ homepage, page }) => {
                await homepage.goto(getTranslation(languageCode).projects);

                await expect(page).toHaveURL(
                    RegExp(`/${languageCode}/projects/?$`),
                );
            });

            test.describe("in projects page", () => {
                let projectList: Locator;

                test.beforeEach(async ({ homepage, page }) => {
                    await homepage.goto(getTranslation(languageCode).projects);

                    projectList = page.getByRole("list", {
                        name: getTranslation(languageCode).projects,
                    });
                });

                test("exists a project", async () => {
                    await expect(projectList).not.toBeEmpty();
                });
            });
        });
    }
});
