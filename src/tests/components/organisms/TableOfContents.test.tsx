import { render, screen } from "@testing-library/react";
import type { MarkdownHeading } from "astro";
import TableOfContents from "components/organisms/TableOfContents";
import { beforeEach, describe, expect, test } from "vitest";

describe("<TableOfContents/>", () => {
    const headings: MarkdownHeading[] = [
        { depth: 2, text: "Introduction", slug: "introduction" },
        { depth: 3, text: "Background", slug: "background" },
        { depth: 3, text: "Highlight", slug: "highlight" },
        { depth: 2, text: "Features", slug: "features" },
        { depth: 3, text: "Feature 1", slug: "feature-1" },
        { depth: 3, text: "Feature 2", slug: "feature-2" },
    ];

    beforeEach(() => {
        render(<TableOfContents headings={headings} />);
    });

    describe.each(headings.filter(({ depth }) => depth === 2))(
        "top level heading %s",
        (heading) => {
            let link: HTMLElement;
            beforeEach(() => {
                link = screen.getByRole("link", { name: heading.text });
            });

            test("is shown", () => {
                expect(link).toBeInTheDocument();
            });

            test("has correct slug", () => {
                expect(link).toHaveAttribute("href", `#${heading.slug}`);
            });
        },
    );
});
