import { getSlug } from "utils/getSlug";
import { describe, expect, test } from "vitest";

describe("getSlug()", () => {
    test.each([
        ["/zh-cn/posts/a-blog-post", "zh-cn"],
        ["/en/about/", "en"],
        ["/zh-cn/projects", "zh-cn"],
    ])('removes language from "%s"', (pathname, language) => {
        expect(getSlug(pathname)).not.toContain(language);
    });

    test.each(["/zh-cn/posts/a-blog-post/", "/en/about/", "/zh-cn/projects/"])(
        'keeps trailing slash for "%s"',
        (pathname) => {
            expect(getSlug(pathname)).toMatch(/\/$/);
        },
    );

    test.each(["/zh-cn/posts/a-blog-post", "/en/about", "/zh-cn/projects"])(
        'does add trailing slash for "%s"',
        (pathname) => {
            expect(getSlug(pathname)).not.toMatch(/\/$/);
        },
    );
});
