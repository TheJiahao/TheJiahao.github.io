import type { MarkdownHeading } from "astro";
import { getTOC } from "utils/getTOC";
import { describe, expect, test } from "vitest";

describe("getTOC()", () => {
    test("nests two level headings", () => {
        const headings: MarkdownHeading[] = [
            {
                depth: 2,
                text: "Introduction",
                slug: "introduction",
            },
            { depth: 3, text: "Background", slug: "background" },
            { depth: 3, text: "Highlight", slug: "highlight" },
            {
                depth: 2,
                text: "Features",
                slug: "features",
            },
            { depth: 3, text: "Feature 1", slug: "feature-1" },
            { depth: 3, text: "Feature 2", slug: "feature-2" },
        ];

        expect(getTOC(headings)).toEqual([
            {
                ...headings[0],
                subHeadings: [
                    {
                        depth: 3,
                        text: "Background",
                        slug: "background",
                        subHeadings: [],
                    },
                    {
                        depth: 3,
                        text: "Highlight",
                        slug: "highlight",
                        subHeadings: [],
                    },
                ],
            },
            {
                ...headings[3],
                subHeadings: [
                    {
                        depth: 3,
                        text: "Feature 1",
                        slug: "feature-1",
                        subHeadings: [],
                    },
                    {
                        depth: 3,
                        text: "Feature 2",
                        slug: "feature-2",
                        subHeadings: [],
                    },
                ],
            },
        ]);
    });

    test("nests three level headings", () => {
        const headings: MarkdownHeading[] = [
            {
                depth: 2,
                text: "Introduction",
                slug: "introduction",
            },
            { depth: 3, text: "Background", slug: "background" },
            { depth: 4, text: "Sub Background", slug: "sub-background" },
            { depth: 3, text: "Highlight", slug: "highlight" },
        ];

        expect(getTOC(headings, 2, 4)[0].subHeadings).toEqual([
            {
                depth: 3,
                text: "Background",
                slug: "background",
                subHeadings: [
                    {
                        depth: 4,
                        text: "Sub Background",
                        slug: "sub-background",
                        subHeadings: [],
                    },
                ],
            },
            {
                depth: 3,
                text: "Highlight",
                slug: "highlight",
                subHeadings: [],
            },
        ]);
    });

    test("detects missing parent", () => {
        const headings: MarkdownHeading[] = [
            { depth: 2, text: "Introduction", slug: "introduction" },
            { depth: 4, text: "Subsubheading", slug: "subsubheading" },
        ];

        expect(() => getTOC(headings, 2, 4)).toThrowError(/Subsubheading/);
    });

    test("stops at endDepth", () => {
        const headings: MarkdownHeading[] = [
            { depth: 2, text: "Introduction", slug: "introduction" },
            { depth: 3, text: "Introduction", slug: "introduction" },
            { depth: 4, text: "Subsubheading", slug: "subsubheading" },
            { depth: 5, text: "Subsubsubheading", slug: "subsubsubheading" },
        ];

        expect(getTOC(headings, 2, 3)).toEqual([
            {
                depth: 2,
                text: "Introduction",
                slug: "introduction",
                subHeadings: [
                    {
                        depth: 3,
                        text: "Introduction",
                        slug: "introduction",
                        subHeadings: [],
                    },
                ],
            },
        ]);
    });
});
