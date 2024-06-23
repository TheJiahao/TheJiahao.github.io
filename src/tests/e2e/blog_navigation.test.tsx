import { expect, type Locator } from "@playwright/test";
import { languageCodes } from "localization";
import { getTranslation } from "utils/getTranslation";
import test from "./utils/fixtures";

test.describe("Blog navigation", () => {
    let blogList: Locator;

    for (const languageCode of languageCodes) {
        test.describe(`in ${languageCode} site`, () => {
            test.use({ languageCode });

            test.beforeEach(async ({ homepage, page }) => {
                await homepage.goto();
                blogList = page.getByRole("list", {
                    name: getTranslation(languageCode).blogList,
                });
            });

            test("exists", async () => {
                await expect(blogList).toBeVisible();
            });

            test("has at least one blog", async () => {
                const blogs = blogList.getByRole("listitem");
                await expect(blogs).not.toHaveCount(0);
            });

            test.describe("after clicking blog card", () => {
                test.beforeEach(async () => {
                    await blogList.getByRole("listitem").first().click();
                });

                test("navigates to blog post", async ({ page }) => {
                    await expect(page).toHaveURL(/\/posts\//);
                });

                test("clicking back button leads back to homepage", async ({
                    page,
                }) => {
                    await page
                        .getByRole("link", {
                            name: getTranslation(languageCode).back,
                        })
                        .click();

                    await expect(page).toHaveURL(RegExp(`/${languageCode}/?`));
                });
            });
        });
    }
});
