import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import NavigationLink from "../../components/NavigationLink";

describe("<NavigationLink/>", () => {
    const href = "/about";
    const text = "About";
    const icon = "i-ui-library-user";

    let link: HTMLElement;

    beforeEach(() => {
        render(<NavigationLink {...{ href, text, icon }} />);
        link = screen.getByRole("link");
    });

    test("is rendered", () => {
        expect(link).toBeInTheDocument();
    });

    test("has text", () => {
        expect(within(link).getByText(text)).toBeInTheDocument();
    });

    describe("icon", () => {
        test("exists", () => {
            expect(link.querySelector("[class^=i-]")).toHaveClass(icon);
        });

        test("is visible", () => {
            expect(link.querySelector("[class^=i-]")).toBeVisible();
        });
    });
});
