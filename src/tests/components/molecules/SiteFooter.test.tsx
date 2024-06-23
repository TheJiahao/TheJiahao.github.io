import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import SiteFooter from "../../../components/molecules/SiteFooter";
import { getTranslation } from "../../../utils/getTranslation";

describe("<SiteFooter/>", () => {
    const props = {
        owner: "Site Owner",
        startYear: 2019,
        source: "https://github.com/TheJiahao/TheJiahao.github.io",
    };

    let footer: HTMLElement;

    beforeEach(() => {
        render(<SiteFooter language="zh-cn" {...props} />);
        footer = screen.getByRole("contentinfo");
    });

    test("contains site owner", () => {
        expect(footer).toHaveTextContent(props.owner);
    });

    test("contains site source", () => {
        const link = within(footer).getByRole("link", {
            name: getTranslation("zh-cn").siteSource,
        });

        expect(link).toHaveAttribute("href", props.source);
    });

    test("contains start year", () => {
        expect(footer).toHaveTextContent(props.startYear.toString());
    });

    test("contains current year", () => {
        const currentYear = new Date().getFullYear().toString();
        expect(footer).toHaveTextContent(currentYear);
    });
});
