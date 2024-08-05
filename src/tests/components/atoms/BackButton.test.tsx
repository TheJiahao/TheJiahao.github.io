import { render, screen } from "@testing-library/react";
import BackButton from "components/atoms/BackButton";
import { describe, expect, test } from "vitest";

describe("<BackButton/>", () => {
    test("links to homepage", () => {
        render(<BackButton language="zh-cn" />);

        expect(screen.getByRole("link")).toHaveAttribute(
            "href",
            expect.stringMatching(/\/zh-cn\/?$/),
        );
    });

    test("shows custom label", () => {
        render(<BackButton language="zh-cn" label="Labeled button" />);

        expect(screen.getByRole("link")).toHaveTextContent("Labeled button");
    });
});
