import { render, screen } from "@testing-library/react";
import Details from "components/molecules/Details";
import { beforeEach, describe, expect, test } from "vitest";

describe("<Details/>", () => {
    describe("with description", () => {
        const description = "This card describes how to write a blog";
        let descriptionElement: HTMLElement;

        beforeEach(() => {
            render(<Details title={"Something"} description={description} />);
            descriptionElement = screen.getByRole("paragraph");
        });

        test("description is rendered", () => {
            expect(descriptionElement).toBeVisible();
        });

        test("description is correct", () => {
            expect(descriptionElement).toHaveTextContent(description);
        });
    });

    describe("without description", () => {
        beforeEach(() => {
            render(<Details title={"Something"} />);
        });

        test("description is not rendered", () => {
            expect(screen.queryByRole("paragraph")).not.toBeInTheDocument();
        });
    });
});
