import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import NavigationLink from "../../components/NavigationLink";

describe("<NavigationLink/>", () => {
    const url = "/about";
    const text = "About";
    const icon = "i-ui-library-user";

    let link: HTMLElement;

    beforeEach(() => {
        render(<NavigationLink {...{ url: url, text, icon }} />);
        link = screen.getByRole("link");
    });

    test("is rendered", () => {
        expect(link).toBeInTheDocument();
    });

    test("is valid", () => {
        expect(link).toHaveAttribute("href", url);
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
