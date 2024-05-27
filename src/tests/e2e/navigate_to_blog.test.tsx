import test, { expect, type Locator } from "@playwright/test";

test.describe("blog list", () => {
    let blogList: Locator;

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
        blogList = page.getByRole("list", { name: "List of blogs" });
    });

    test("exists", async () => {
        await expect(blogList).toBeVisible();
    });

    test("has at least one blog", async () => {
        const blogs = blogList.getByRole("listitem");
        await expect(blogs).not.toHaveCount(0);
    });

    test("clicking a blog leads to blog post", async ({ page }) => {
        const firstBlog = blogList.getByRole("listitem").first();

        await firstBlog.click();

        await expect(page).toHaveURL(/\/posts\//);
    });
});
