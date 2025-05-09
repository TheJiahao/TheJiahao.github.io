import { render, screen, within } from "@testing-library/react";
import type { IconLinkProps } from "components/atoms/IconLink";
import NavigationMenu from "components/molecules/NavigationMenu";
import { beforeEach, describe, expect, test } from "vitest";

describe("<NavigationMenu/>", () => {
    let navigationMenu: HTMLElement;
    let navigationLinks: HTMLElement[];
    const links: IconLinkProps[] = [
        {
            url: "/",
            label: "Home",
            icon: <span />,
        },
        {
            url: "/about",
            label: "About",
            icon: <span />,
        },
        {
            url: "/posts",
            label: "Posts",
            icon: <span />,
        },
    ];

    beforeEach(() => {
        render(<NavigationMenu language="zh-cn" role="menu" links={links} />);

        navigationMenu = screen.getByRole("menu", {
            name: "导航链接",
        });
        navigationLinks = within(navigationMenu).getAllByRole("menuitem");
    });

    test("shows all links", () => {
        expect(navigationLinks).toHaveLength(3);
    });

    test("shows correct links", () => {
        const linkTexts = navigationLinks.map((link) => link.textContent);

        for (const [i, link] of links.entries()) {
            expect(linkTexts[i]).toContain(link.label);
        }
    });
});
