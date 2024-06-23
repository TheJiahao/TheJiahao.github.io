import { render, screen, within } from "@testing-library/react";
import { languageCodes } from "localization";
import { getTranslation } from "utils/getTranslation";
import { beforeEach, describe, expect, test } from "vitest";
import type { LinkProps } from "../../../components/organisms/LinkCard";
import LinkList from "../../../components/organisms/LinkList";

describe("<LinkList/>", () => {
    const links: LinkProps[] = [
        {
            title: "How to write unit tests for Astro components?",
            description:
                "This blog post will teach you how to write unit tests for Astro components.",
            url: "https://www.blog.com/astro-unit-tests",
        },
        {
            title: "如何写出一篇好文章？",
            description: "本文介绍了如何写出一篇好文章。",
            url: "https://another.blog.com/how-to-write-good-articles",
        },
    ];

    let linkList: HTMLElement;

    describe.each(languageCodes)("%s", (language) => {
        beforeEach(() => {
            render(<LinkList language={language} links={links} />);
            linkList = screen.getByRole("list", {
                name: getTranslation(language).externalLinks,
            });
        });

        test("is rendered", () => {
            expect(linkList).toBeVisible();
        });

        test("contains given links", () => {
            expect(within(linkList).getAllByRole("listitem")).toHaveLength(2);
        });

        test("links have correct titles", () => {
            const titles = screen.getAllByRole("heading");

            expect(titles[0]).toHaveTextContent(links[0].title);
            expect(titles[1]).toHaveTextContent(links[1].title);
        });
    });
});
