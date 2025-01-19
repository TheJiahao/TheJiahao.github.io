import { render, screen } from "@testing-library/react";
import IconLink from "components/atoms/IconLink";
import { LuRss, LuSquare } from "react-icons/lu";
import { describe, expect, test } from "vitest";

describe("<IconLink/>", () => {
    describe.each([true, false])("when onlyIcon is %s", (onlyIcon) => {
        test("renders correct icon", () => {
            render(
                <IconLink
                    url="https://example.com"
                    icon={<LuRss role="presentation" />}
                    label="Social link"
                    onlyIcon={onlyIcon}
                />,
            );

            expect(screen.getByRole("presentation")).toBeInTheDocument();
        });

        test("has correct url", () => {
            const url = "https://example.com";

            render(
                <IconLink url={url} icon={<LuSquare />} label="icon link" />,
            );

            expect(screen.getByRole("link")).toHaveAttribute("href", url);
        });
    });

    test("has correct label", () => {
        const label = "custom label";

        render(
            <IconLink
                url="https://mylink.com"
                icon={<LuSquare />}
                label={label}
                onlyIcon={false}
            />,
        );

        expect(screen.getByRole("link")).toHaveTextContent(label);
    });

    test("hides label when onlyIcon is true", () => {
        render(
            <IconLink
                url="https://mylink.com"
                icon={<LuSquare />}
                label="icon link"
                onlyIcon={true}
            />,
        );

        expect(
            screen.getByRole("link", { name: "icon link" }),
        ).not.toHaveTextContent(/[\s\S]/);
    });
});
