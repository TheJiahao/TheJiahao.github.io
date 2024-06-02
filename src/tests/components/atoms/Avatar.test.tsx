import { render, screen } from "@testing-library/react";
import Avatar from "components/atoms/Avatar";
import { SITE_AVATAR } from "config";
import { describe, expect, test } from "vitest";

describe("<Avatar/>", () => {
    describe("can display", () => {
        test("local image", () => {
            render(<Avatar image={SITE_AVATAR} size="20" />);

            expect(screen.getByRole("img"), "image is correct").toHaveAttribute(
                "src",
                SITE_AVATAR.src,
            );
        });

        test("remote image", () => {
            const image = Object.freeze({
                src: "https://example.com/image.jpg",
                width: 100,
                height: 1000,
                format: "jpg",
            });

            render(<Avatar image={image} size="30" />);

            expect(screen.getByRole("img"), "image is correct").toHaveAttribute(
                "src",
                image.src,
            );
        });
    });

    test("has alt", () => {
        render(<Avatar image={SITE_AVATAR} size="20" />);

        expect(screen.getByRole("img")).toHaveAttribute(
            "alt",
            expect.stringContaining("Avatar"),
        );
    });

    test("has correct size", () => {
        render(<Avatar image={SITE_AVATAR} size="50" />);

        expect(screen.getByRole("img")).toHaveAttribute("size", "50");
    });
});
