import { render, screen } from "@testing-library/react";
import { BLOG_IMAGE_PLACEHOLDER } from "config";
import { describe, expect, test } from "vitest";
import CoverImage from "../../../components/atoms/CoverImage";

describe("<CoverImage/>", () => {
    test("shows placeholder image by default", () => {
        render(<CoverImage title="How to write tests" />);

        expect(screen.getByRole("img")).toHaveAttribute(
            "src",
            BLOG_IMAGE_PLACEHOLDER.src,
        );
    });

    test("shows correct image", () => {
        const image = Object.freeze({
            src: "https://example.com/image.jpg",
            width: 100,
            height: 1000,
            format: "jpg",
        });

        render(<CoverImage title="A cool blog post" image={image} />);

        expect(screen.getByRole("img")).toHaveAttribute("src", image.src);
    });

    test("has alt", () => {
        render(<CoverImage title="A cool blog post" />);

        expect(screen.getByRole("img")).toHaveAttribute(
            "alt",
            expect.stringContaining("A cool blog post"),
        );
    });
});
