import { render, screen } from "@testing-library/react";
import SocialLink from "components/atoms/SocialLink";
import { describe, expect, test } from "vitest";

describe("<SocialLink/>", () => {
    test.each(["i-lucide-rss", "i-logos-github-icon", "icon-3"])(
        "renders correct icon %s",
        (icon) => {
            render(
                <SocialLink
                    url="https://example.com"
                    icon={icon}
                    title="Social link"
                />,
            );

            expect(
                screen.getByRole("link", { name: "Social link" }),
            ).toHaveClass(icon);
        },
    );

    test.each(["/rss.xml", "https://www.mysocialpage.com", "/about"])(
        "has correct url %s",
        (url) => {
            render(
                <SocialLink url={url} icon="i-some-icon" title="Social link" />,
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
                icon="i-some-icon"
                title={title}
            />,
        );

        expect(screen.getByRole("link", { name: title })).toBeVisible();
    });
});
