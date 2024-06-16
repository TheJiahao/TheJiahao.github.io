import { render, screen } from "@testing-library/react";
import { getRelativeLocaleUrl } from "astro:i18n";
import NavigationToolBar from "components/molecules/NavigationToolBar";
import { getTranslation } from "utils/getTranslation";
import { beforeEach, describe, expect, test, vi } from "vitest";

describe("<NavigationToolBar/>", () => {
    beforeEach(() => {
        render(<NavigationToolBar language="zh-cn" handleExpand={vi.fn()} />);
    });

    test("has avatar", () => {
        expect(
            screen.getByRole("img", {
                name: getTranslation("zh-cn").siteAvatar,
            }),
        ).toBeInTheDocument();
    });

    test("avatar links to about page", () => {
        expect(
            screen.getByRole("link", {
                name: getTranslation("zh-cn").siteAvatar,
            }),
        ).toHaveAttribute("href", getRelativeLocaleUrl("zh-cn", "/about"));
    });

    test("has menu button", () => {
        expect(
            screen.getByRole("button", {
                name: getTranslation("zh-cn").showNavigationMenu,
            }),
        ).toBeInTheDocument();
    });
});
