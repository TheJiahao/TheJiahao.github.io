import { describe, expect, test, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import NavigationBar from "../../components/NavigationBar";
import type { NavigationLinkProps } from "../../components/NavigationLink";

describe("NavigationBar", () => {
    describe("avatar", () => {
        let avatar: HTMLElement;

        beforeEach(() => {
            render(<NavigationBar />);
            avatar = screen.getByAltText("Avatar");
        });

        test("has non-empty src", () => {
            expect(avatar).not.toHaveProperty("src", "");
            expect(avatar).not.toHaveProperty("src", undefined);
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

        beforeEach(() => {
            render(<NavigationBar links={links} />);
        });

        test("are all rendered", () => {
            expect(
                screen.getAllByRole("listitem", { name: "Navigation link" }),
            ).toHaveLength(3);
        });

        test("have correct texts", () => {
            const linkTexts = screen
                .getAllByRole("listitem", { name: "Navigation link" })
                .map((link) => link.textContent);

            for (let i = 0; i < links.length; i++) {
                expect(linkTexts[i]).toContain(links[i].text);
            }
        });
    });
});
