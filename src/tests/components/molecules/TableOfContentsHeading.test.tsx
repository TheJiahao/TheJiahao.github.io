import { render, screen } from "@testing-library/react";
import TableOfContentsHeading from "components/molecules/TableOfContentsHeading";
import { beforeEach, describe, expect, test } from "vitest";

describe("<TableOfContentsHeading/>", () => {
    describe("without subheadings", () => {
        const heading = {
            depth: 2,
            text: "Introduction",
            slug: "introduction",
            subHeadings: [],
        };

        beforeEach(() => {
            render(<TableOfContentsHeading heading={heading} />);
        });

        test("no lists are shown", () => {
            expect(screen.queryByRole("list")).not.toBeInTheDocument();
        });

        test("contains link to heading", () => {
            expect(
                screen.getByRole("link", { name: heading.text }),
            ).toHaveAttribute("href", `#${heading.slug}`);
        });
    });

    describe("with subheadings", () => {
        const heading = {
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
            ],
        };

        beforeEach(() => {
            render(<TableOfContentsHeading heading={heading} />);
        });

        test("list of subheadings exists", () => {
            expect(screen.getByRole("list")).toBeInTheDocument();
        });

        describe.each(heading.subHeadings)("subheading %s", (subHeading) => {
            test("is shown", () => {
                expect(
                    screen.getByRole("link", { name: subHeading.text }),
                ).toBeInTheDocument();
            });

            test("has correct link", () => {
                expect(
                    screen.getByRole("link", { name: subHeading.text }),
                ).toHaveAttribute("href", `#${subHeading.slug}`);
            });
        });
    });
});
