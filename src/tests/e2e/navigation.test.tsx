import { expect, type Locator } from "@playwright/test";
import { languageCodes } from "localization";
import { getTranslation } from "utils/getTranslation";
import test from "./utils/fixtures";

test.describe("Navigation", () => {
    for (const languageCode of languageCodes) {
        test.describe(`in ${languageCode} site`, () => {
            let navigationBar: Locator;

            test.use({ languageCode });

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
                    await expect(
                        navigationBar.getByRole("link"),
                    ).not.toHaveCount(0);
                });

                for (const { name, url } of [
                    {
                        name: getTranslation(languageCode).homePage,
                        url: RegExp(`/${languageCode}/?$`),
                    },
                    {
                        name: getTranslation(languageCode).archive,
                        url: RegExp(`/${languageCode}/posts/?$`),
                    },
                    {
                        name: getTranslation(languageCode).about,
                        url: RegExp(`/${languageCode}/about/?$`),
                    },
                ])
                    test(`has link to ${name}`, async ({ page }) => {
                        const link = navigationBar.getByRole("link", {
                            name,
                        });

                        await link.click();

                        await expect(page).toHaveURL(url);
                    });
            });

            test.describe("navigation toolbar", { tag: "@mobile" }, () => {
                let navigationToolBar: Locator;
                let expandButton: Locator;

                test.beforeEach(({ page }) => {
                    navigationToolBar = page.getByRole("toolbar");
                    expandButton = navigationToolBar.getByRole("button", {
                        name: getTranslation(languageCode).showNavigationMenu,
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
                        await expect(
                            navigationBar.getByRole("menu"),
                        ).toBeHidden();
                    });
                });

                test.describe("navigation menu", () => {
                    test.beforeEach(async ({ homepage }) => {
                        await homepage.toggleMenu();
                    });

                    test("can be expanded", async () => {
                        await expect(
                            navigationBar.getByRole("toolbar"),
                        ).toHaveAttribute("aria-expanded", "true");
                    });

                    test("is not empty", async () => {
                        await expect(
                            navigationBar.getByRole("menuitem"),
                        ).not.toHaveCount(0);
                    });

                    test("can be collapsed", async ({ homepage }) => {
                        await homepage.toggleMenu();

                        await expect(
                            navigationBar.getByRole("toolbar"),
                        ).toHaveAttribute("aria-expanded", "false");
                    });
                });
            });
        });
    }
});
