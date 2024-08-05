import { render, screen, within } from "@testing-library/react";
import type { ImageCardProps } from "components/molecules/ImageCard";
import CardList from "components/organisms/CardList";
import { beforeEach, describe, expect, test } from "vitest";

describe("<CardList/>", () => {
    const cards: ImageCardProps[] = [
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

    let list: HTMLElement;

    beforeEach(() => {
        render(<CardList cards={cards} />);

        list = screen.getByRole("list");
    });

    test("is rendered", () => {
        expect(list).toBeVisible();
    });

    test("contains given blogs", () => {
        expect(within(list).getAllByRole("listitem")).toHaveLength(2);
    });

    test("blogs have correct titles", () => {
        const blogTitles = screen.getAllByRole("heading");

        expect(blogTitles[0]).toHaveTextContent(cards[0].title);
        expect(blogTitles[1]).toHaveTextContent(cards[1].title);
    });
});
