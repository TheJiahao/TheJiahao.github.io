import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import SiteFooter from "../../components/SiteFooter";

describe("<SiteFooter/>", () => {
    const props = {
        owner: "Site Owner",
        startYear: 2019,
        license: {
            name: "MIT",
            url: "https://opensource.org/license/MIT",
        },
        source: "https://github.com/TheJiahao/TheJiahao.github.io",
    };

    let footer: HTMLElement;

    beforeEach(() => {
        render(<SiteFooter {...props} />);
        footer = screen.getByRole("contentinfo");
    });

    test("contains site owner", () => {
        expect(footer).toHaveTextContent(props.owner);
    });

    describe("contains link to", () => {
        test("license", () => {
            const link = within(footer).getByRole("link", {
                name: props.license.name,
            });

            expect(link).toHaveAttribute("href", props.license.url);
        });

        test("site source", () => {
            const link = within(footer).getByRole("link", {
                name: "Site source",
            });

            expect(link).toHaveAttribute("href", props.source);
        });
    });

    test("contains start year", () => {
        expect(footer).toHaveTextContent(props.startYear.toString());
    });

    test("contains current year", () => {
        const currentYear = new Date().getFullYear().toString();
        expect(footer).toHaveTextContent(currentYear);
    });
});
