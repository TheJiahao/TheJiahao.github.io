import { render, screen } from "@testing-library/react";
import SocialLink from "components/molecules/SocialLink";
import { LuGithub, LuLinkedin, LuRss, LuSquare } from "react-icons/lu";
import { describe, expect, test } from "vitest";

describe("<SocialLink/>", () => {
    test.each([
        <LuRss key={0} />,
        <LuGithub key={0} />,
        <LuLinkedin key={0} />,
    ])("renders correct icon %s", (icon) => {
        render(
            <SocialLink
                url="https://example.com"
                icon={icon}
                label="Social link"
            />,
        );

        expect(screen.getByRole("presentation")).toBeInTheDocument();
    });

    test.each(["/rss.xml", "https://www.mysocialpage.com", "/about"])(
        "has correct url %s",
        (url) => {
            render(
                <SocialLink
                    url={url}
                    icon={<LuSquare />}
                    label="Social link"
                />,
            );

            expect(
                screen.getByRole("link", { name: "Social link" }),
            ).toHaveAttribute("href", url);
        },
    );

    test.each(["RSS", "My page", "GitHub"])("has correct title %s", (title) => {
        render(
            <SocialLink
                url="https://mylink.com"
                icon={<LuSquare />}
                label={title}
            />,
        );

        expect(screen.getByRole("link", { name: title })).toBeVisible();
    });
});
