import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import NavigationBar from "../../../components/organisms/NavigationBar";
import type { IconLink } from "../../../interfaces/IconLink";

describe("<NavigationBar/>", () => {
    describe("avatar", () => {
        let avatar: HTMLElement;

        beforeEach(() => {
            render(<NavigationBar />);
            avatar = screen.getByAltText("Avatar");
        });

        test("exists", () => {
            expect(avatar).toBeInTheDocument();
        });

        test("has valid src", () => {
            expect(avatar).toHaveAttribute(
                "src",
                expect.not.stringMatching(/^$/),
            );
        });
    });

    describe("links", () => {
        let navigationBar: HTMLElement;
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
    });
});
