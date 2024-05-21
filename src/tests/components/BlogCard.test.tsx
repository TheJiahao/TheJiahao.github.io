import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import BlogCard from "../../components/BlogCard";

describe("<BlogCard/>", () => {
    const title = "How to write unit tests for Astro components?";
    const description =
        "This blog post will teach you how to write unit tests for Astro components.";
    const date = new Date("2024-05-21");
    const slug = "astro-unit-tests";

    beforeEach(() => {
        render(<BlogCard {...{ title, description, date, slug }} />);
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
        expect(screen.getByRole("link")).toHaveAttribute(
            "href",
            `/posts/${slug}`,
        );
    });
});
