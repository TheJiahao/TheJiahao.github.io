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

    test.describe("navigation bar", () => {
        let navigationBar: Locator;

        test.beforeEach(async ({ page }) => {
            navigationBar = page.getByRole("navigation");
        });

        test("exists", async () => {
            expect(navigationBar).toBeDefined();

            await expect(navigationBar).toHaveCount(1);
        });

        test("has link to homepage", async ({ page }) => {
            const link = navigationBar
                .getByRole("link")
                .filter({ hasText: "首页" });

            await link.click();

            await expect(page).toHaveURL("/");
        });

        test("has link to posts page", async ({ page }) => {
            const link = navigationBar
                .getByRole("link")
                .filter({ hasText: "归档" });

            await link.click();

            await expect(page).toHaveURL(/\/posts\/?/);
        });

        test("has link to about page", async ({ page }) => {
            const link = navigationBar
                .getByRole("link")
                .filter({ hasText: "关于" });

            await link.click();

            await expect(page).toHaveURL(/\/about\/?/);
        });
    });

    test.describe("blog list", () => {
        let blogList: Locator;

        test.beforeEach(async ({ page }) => {
            blogList = page.getByRole("list", { name: "List of blogs" });
        });

        test("exists", async () => {
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
