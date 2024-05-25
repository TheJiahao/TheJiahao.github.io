import { cleanup, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import BlogCard from "../../components/BlogCard";
import { BLOG_IMAGE_PLACEHOLDER } from "../../config";

describe("<BlogCard/>", () => {
    const title = "How to write unit tests for Astro components?";
    const description =
        "This blog post will teach you how to write unit tests for Astro components.";
    const date = new Date("2024-05-21");
    const url = "astro-unit-tests";

    beforeEach(() => {
        render(<BlogCard {...{ title, description, date, url }} />);
    });

    describe("image exists", () => {
        beforeEach(() => {
            cleanup();
        });

        test("when no image is given", () => {
            render(<BlogCard {...{ title, description, date, url }} />);

            expect(screen.getByRole("img")).toHaveAttribute(
                "src",
                BLOG_IMAGE_PLACEHOLDER.src,
            );
        });

        test("when image is given", () => {
            const image = Object.freeze({
                src: "https://example.com/image.jpg",
                alt: "Image",
                width: 100,
                height: 1000,
                format: "jpg",
            });

            render(<BlogCard {...{ title, description, date, url, image }} />);

            expect(screen.getByRole("img")).toHaveAttribute("src", image.src);
        });
    });

    test("is rendered", () => {
        expect(screen.getByRole("article")).toBeInTheDocument();
    });

    test("has title", () => {
        expect(screen.getByRole("heading")).toHaveTextContent(title);
    });

    test("has description", () => {
        expect(screen.getByText(description)).toBeInTheDocument();
    });

    test("has date", () => {
        expect(screen.getByText("2024-05-21")).toBeInTheDocument();
    });

    test("has link", () => {
        expect(screen.getByRole("link")).toHaveAttribute("href");
    });
});
