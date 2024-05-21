import { describe, expect, test, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import NavigationBar from "../../components/NavigationBar";
import type { NavigationLinkProps } from "../../components/NavigationLink";

describe("<NavigationBar/>", () => {
    describe("avatar", () => {
        let avatar: HTMLElement;

        beforeEach(() => {
            render(<NavigationBar />);
            avatar = screen.getByAltText("Avatar");
        });

        test("exists", () => {
            expect(avatar).toBeDefined();
        });

        test("has valid src", () => {
            expect(avatar).toHaveAttribute(
                "src",
                expect.not.stringMatching(""),
            );
        });
    });

    describe("links", () => {
        const links: NavigationLinkProps[] = [
            {
                href: "/",
                text: "Home",
                icon: "i-home",
            },
            {
                href: "/about",
                text: "About",
                icon: "i-user",
            },
            {
                href: "/posts",
                text: "Posts",
                icon: "i-article",
            },
        ];

        let navigationBar: HTMLElement;
        let navigationLinks: HTMLElement[];

        beforeEach(() => {
            render(<NavigationBar links={links} />);

            navigationBar = screen.getByRole("navigation");
            navigationLinks = within(navigationBar).getAllByRole("listitem");
        });

        test("are rendered", () => {
            expect(navigationLinks).toHaveLength(3);
        });

        test("have correct texts", () => {
            const linkTexts = navigationLinks.map((link) => link.textContent);

            for (const [i, link] of links.entries()) {
                expect(linkTexts[i]).toContain(link.text);
            }
        });

        test("have correct icons", () => {
            const linkIcons = navigationLinks.map((link) =>
                link.querySelector("[class^=i-]"),
            );

            for (const [i, link] of links.entries()) {
                linkIcons[i]!.classList.contains(link.icon);
            }
        });

        test("have visible icons", () => {
            const linkIcons = navigationLinks.map((link) =>
                link.querySelector("[class^=i-]"),
            );

            for (const icon of linkIcons) {
                expect(icon).toBeVisible();
            }
        });
    });
});
