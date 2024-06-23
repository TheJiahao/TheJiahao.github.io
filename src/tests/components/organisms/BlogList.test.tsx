import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import type { BlogCardProps } from "../../../components/organisms/BlogCard";
import BlogList from "../../../components/organisms/BlogList";

describe("<BlogList/>", () => {
    const blogs: BlogCardProps[] = [
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

    beforeEach(() => {
        render(<BlogList language="zh-cn" blogs={blogs} />);
        blogList = screen.getByRole("list", { name: "List of blogs" });
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
