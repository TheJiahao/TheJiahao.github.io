import type { Page } from "interfaces/Page";
import { search } from "utils/search";
import { describe, expect, test } from "vitest";
import { mock } from "vitest-mock-extended";

describe("search()", () => {
    describe("in Chinese", () => {
        const pagesChinese: Page[] = [
            {
                title: "如何写出一篇博客",
                url: "/zh-cn/posts/how-to-write-a-blog",
                content: "本文将教读者写出一篇博客。",
                image: mock<ImageMetadata>(),
            },
            {
                title: "使用 TypeScript 实现搜索功能",
                url: "/zh-cn/posts/typescript-search",
                content:
                    "本文介绍了一种使用 TypeScript 为 Astro 网站实现搜索功能的方法。",
                image: mock<ImageMetadata>(),
            },
            {
                title: "在 Astro 网站中使用 React 组件",
                url: "/zh-cn/posts/react-components-in-astro",
                content: `
            <h2>安装<h2>
            使用 pnpm 安装 astro
            <code>pnpm add astro</code>
            `,
                image: mock<ImageMetadata>(),
            },
        ];

        test.each([
            ["博客", [pagesChinese[0]]],
            ["TypeScript", [pagesChinese[1]]],
            ["使用", [pagesChinese[1], pagesChinese[2]]],
            ["pnpm", [pagesChinese[2]]],
        ])('with keyword "%s" in blog title', (keyword, expectedResult) => {
            const results = search(keyword, pagesChinese);

            for (const result of expectedResult) {
                expect(results).toContainEqual(result);
            }
        });

        test.each([
            ["一篇", [pagesChinese[0]]],
            ["方法", [pagesChinese[1]]],
            ["astro", [pagesChinese[1], pagesChinese[2]]],
        ])('with keyword "%s" in blog content', (keyword, expectedResult) => {
            const results = search(keyword, pagesChinese);

            for (const result of expectedResult) {
                expect(results).toContainEqual(result);
            }
        });

        test.each([["客人"], ["JavaScript"], ["食用"], ["yarn"]])(
            'with keyword "%s" not in blogs',
            (keyword) => {
                const results = search(keyword, pagesChinese);
                expect(results).toHaveLength(0);
            },
        );
    });
});
