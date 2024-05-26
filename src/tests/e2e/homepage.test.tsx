import test, { expect, type Locator } from "@playwright/test";

test.describe("Homepage", () => {
    test("can be accessed", async ({ page }) => {
        await page.goto("/");
    });

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("has correct title", async ({ page }) => {
        await expect(page).toHaveTitle("Jiahao 的博客");
    });

    test.describe("blog list", () => {
        let blogList: Locator;

        test.beforeEach(({ page }) => {
            blogList = page.getByRole("list", { name: "List of blogs" });
        });

        test("exists", () => {
            expect(blogList).toBeDefined();
        });

        test("has at least one blog", async () => {
            const blogs = await blogList.getByRole("listitem").count();
            expect(blogs).toBeGreaterThan(0);
        });

        test("clicking a blog leads to blog post", async ({ page }) => {
            const firstBlog = blogList.getByRole("listitem").first();

            await firstBlog.click();

            await expect(page).toHaveURL(/\/posts\//);
        });
    });
});
