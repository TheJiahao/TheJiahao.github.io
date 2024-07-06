import type { MarkdownHeading } from "astro";
import { getTOC } from "utils/getTOC";
import { describe, expect, test } from "vitest";

describe("getTOC()", () => {
    test("nests two level headings", () => {
        const headings: MarkdownHeading[] = [
            { depth: 2, text: "Introduction", slug: "introduction" },
            { depth: 3, text: "Background", slug: "background" },
            { depth: 3, text: "Highlight", slug: "highlight" },
            { depth: 2, text: "Features", slug: "features" },
            { depth: 3, text: "Feature 1", slug: "feature-1" },
            { depth: 3, text: "Feature 2", slug: "feature-2" },
        ];

        expect(getTOC(headings)).toEqual([
            {
                depth: 2,
                text: "Introduction",
                slug: "introduction",
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
                    {
                        depth: 2,
                        text: "Features",
                        slug: "features",
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
                ],
            },
        ]);
    });
});
