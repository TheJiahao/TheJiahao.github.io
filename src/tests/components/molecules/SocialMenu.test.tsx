import { render, screen } from "@testing-library/react";
import { type SocialLinkProps } from "components/atoms/SocialLink";
import SocialMenu from "components/molecules/SocialMenu";
import { languageCodes } from "localization";
import { beforeEach, describe, expect, test } from "vitest";

describe("<SocialMenu/>", () => {
    const links: SocialLinkProps[] = [
        {
            url: "/relative-url",
            icon: "i-relative",
            title: "Relative",
        },
        {
            url: "https://absolute-url.com",
            icon: "i-absolute",
            title: "Absolute",
        },
    ];

    describe.each(languageCodes)("%s", (languageCode) => {
        beforeEach(() => {
            render(<SocialMenu links={links} language={languageCode} />);
        });

        describe("relative link", () => {
            test("contains language code", () => {
                expect(
                    screen.getByRole("link", { name: "Relative" }),
                ).toHaveAttribute(
                    "href",
                    expect.stringContaining(languageCode),
                );
            });

            test("not changed to absolute", () => {
                expect(
                    screen.getByRole("link", { name: "Relative" }),
                ).toHaveAttribute("href", expect.stringMatching(RegExp(`^/`)));
            });
        });

        describe("absolute link", () => {
            test("is not changed", () => {
                expect(
                    screen.getByRole("link", { name: "Absolute" }),
                ).toHaveAttribute("href", links[1].url);
            });
        });
    });
});
