import { expect, type Locator } from "@playwright/test";
import test from "./utils/fixtures";

test.describe("Blog navigation", () => {
    let blogList: Locator;

    test.beforeEach(async ({ homepage, page }) => {
        await homepage.goto();
        blogList = page.getByRole("list", { name: "List of blogs" });
    });

    test("exists", async () => {
        await expect(blogList).toBeVisible();
    });

    test("has at least one blog", async () => {
        const blogs = blogList.getByRole("listitem");
        await expect(blogs).not.toHaveCount(0);
    });

    test.describe("after clicking blog card", () => {
        test.beforeEach("clicking a blog leads to blog post", async () => {
            await blogList.getByRole("listitem").first().click();
        });

        test("navigates to blog post", async ({ page }) => {
            await expect(page).toHaveURL(/\/posts\//);
        });

        test("clicking back button leads back to homepage", async ({
            page,
        }) => {
            const backButton = page.getByRole("link", { name: "返回" });
            await backButton.click();

            await expect(page).toHaveURL(/\/zh-cn\/$/);
        });
    });
});
