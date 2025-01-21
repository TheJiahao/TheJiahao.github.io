import { render, screen } from "@testing-library/react";
import BackLink from "components/molecules/BackLink";
import { describe, expect, test } from "vitest";

describe("<BackLink/>", () => {
    test("links to homepage", () => {
        render(<BackLink language="zh-cn" />);

        expect(screen.getByRole("link")).toHaveAttribute(
            "href",
            expect.stringMatching(/\/zh-cn\/?$/),
        );
    });

    test("shows custom label", () => {
        render(<BackLink language="zh-cn" label="Labeled button" />);

        expect(screen.getByRole("link")).toHaveTextContent("Labeled button");
    });
});
