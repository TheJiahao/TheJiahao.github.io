import { render, screen } from "@testing-library/react";
import Avatar from "components/atoms/Avatar";
import { SITE_AVATAR } from "config";
import { describe, expect, test } from "vitest";

describe("<Avatar/>", () => {
    describe("can display", () => {
        test("local image", () => {
            render(<Avatar image={SITE_AVATAR} size="20" alt="local image" />);

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

            render(<Avatar image={image} size="30" alt="remote image" />);

            expect(screen.getByRole("img"), "image is correct").toHaveAttribute(
                "src",
                image.src,
            );
        });
    });

    test("has alt", () => {
        render(<Avatar image={SITE_AVATAR} size="20" alt="Avatar" />);

        expect(screen.getByRole("img")).toHaveAttribute(
            "alt",
            expect.stringContaining("Avatar"),
        );
    });

    for (const size of ["15", "30", "40"]) {
        test("has correct size", () => {
            render(<Avatar image={SITE_AVATAR} size={size} alt="Avatar" />);
            expect(screen.getByRole("img")).toHaveClass(`size-${size}`);
        });
    }
});
