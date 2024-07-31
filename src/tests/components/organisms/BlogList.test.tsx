import { render, screen, within } from "@testing-library/react";
import { languageCodes } from "localization";
import { getTranslation } from "utils/getTranslation";
import { beforeEach, describe, expect, test } from "vitest";
import type { ImageCardProps } from "../../../components/molecules/ImageCard";
import BlogList from "../../../components/organisms/BlogList";

describe("<BlogList/>", () => {
    const blogs: ImageCardProps[] = [
        {
            title: "How to write unit tests for Astro components?",
            description:
                "This blog post will teach you how to write unit tests for Astro components.",
            date: new Date("2020-12-11"),
            url: "astro-unit-tests",
        },
        {
            title: "如何写出一篇好文章？",
            description: "本文介绍了如何写出一篇好文章。",
            date: new Date("2019-01-05"),
            url: "how-to-write-good-articles",
        },
    ];

    let blogList: HTMLElement;

    describe.each(languageCodes)("%s", (language) => {
        beforeEach(() => {
            render(<BlogList language={language} blogs={blogs} />);
            blogList = screen.getByRole("list", {
                name: getTranslation(language).blogList,
            });
        });

        test("is rendered", () => {
            expect(blogList).toBeVisible();
        });

        test("contains given blogs", () => {
            expect(within(blogList).getAllByRole("listitem")).toHaveLength(2);
        });

        test("blogs have correct titles", () => {
            const blogTitles = screen.getAllByRole("heading");

            expect(blogTitles[0]).toHaveTextContent(blogs[0].title);
            expect(blogTitles[1]).toHaveTextContent(blogs[1].title);
        });
    });
});
