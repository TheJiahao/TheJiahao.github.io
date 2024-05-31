import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import IconText from "../../components/IconText";

describe("<IconText/>", () => {
    const text = "About";
    const icon = "i-ui-library-user";

    beforeEach(() => {
        render(<IconText icon={icon}>{text}</IconText>);
    });

    test("has text", () => {
        expect(screen.getByText(text)).toBeInTheDocument();
    });

    test("has icon", () => {
        expect(screen.getByRole("img")).toHaveClass(icon);
    });
});
