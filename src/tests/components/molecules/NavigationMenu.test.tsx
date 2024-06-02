import { render, screen, within } from "@testing-library/react";
import NavigationMenu from "components/molecules/NavigationMenu";
import type { IconLink } from "interfaces/IconLink";
import { beforeEach, describe, expect, test } from "vitest";

describe("<NavigationMenu/>", () => {
    let navigationMenu: HTMLElement;
    let navigationLinks: HTMLElement[];
    const links: IconLink[] = [
        {
            url: "/",
            text: "Home",
            icon: "i-home",
        },
        {
            url: "/about",
            text: "About",
            icon: "i-user",
        },
        {
            url: "/posts",
            text: "Posts",
            icon: "i-article",
        },
    ];

    beforeEach(() => {
        render(<NavigationMenu links={links} />);

        navigationMenu = screen.getByRole("list");
        navigationLinks = within(navigationMenu).getAllByRole("listitem");
    });

    test("shows all links", () => {
        expect(navigationLinks).toHaveLength(3);
    });

    test("shows correct links", () => {
        const linkTexts = navigationLinks.map((link) => link.textContent);

        for (const [i, link] of links.entries()) {
            expect(linkTexts[i]).toContain(link.text);
        }
    });
});
