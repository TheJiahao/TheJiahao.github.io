import { render, screen } from "@testing-library/react";
import { type SocialLinkProps } from "components/molecules/SocialLink";
import SocialMenu from "components/molecules/SocialMenu";
import { languageCodes } from "localization";
import { LuCircle, LuSquare } from "react-icons/lu";
import { beforeEach, describe, expect, test } from "vitest";

describe("<SocialMenu/>", () => {
    const links: SocialLinkProps[] = [
        {
            url: "/relative-url",
            icon: <LuSquare />,
            label: "Relative",
        },
        {
            url: "https://absolute-url.com",
            icon: <LuCircle />,
            label: "Absolute",
        },
    ];

    describe.each(languageCodes)("%s", (languageCode) => {
        beforeEach(() => {
            render(<SocialMenu links={links} language={languageCode} />);
        });

        test("has links", () => {
            expect(screen.getAllByRole("link")).toHaveLength(links.length);
        });

        test("relative link is rendered", () => {
            expect(
                screen.getByRole("link", { name: "Relative" }),
            ).toHaveAttribute("href", links[0].url);
        });

        test("absolute link is rendered", () => {
            expect(
                screen.getByRole("link", { name: "Absolute" }),
            ).toHaveAttribute("href", links[1].url);
        });
    });
});
