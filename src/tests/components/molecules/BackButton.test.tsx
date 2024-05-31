import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import BackButton from "../../../components/molecules/BackButton";

describe("<BackButton/>", () => {
    test("links to homepage", () => {
        render(<BackButton language="zh-cn" />);

        expect(screen.getByRole("link")).toHaveAttribute(
            "href",
            expect.stringMatching(/\/zh-cn?\/$/),
        );
    });
});
