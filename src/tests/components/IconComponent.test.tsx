import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import IconComponent from "../../components/IconComponent";

describe("<IconComponent/>", () => {
    const text = "About";
    const icon = "i-ui-library-user";

    beforeEach(() => {
        render(<IconComponent icon={icon}>{text}</IconComponent>);
    });

    test("has text", () => {
        expect(screen.getByText(text)).toBeInTheDocument();
    });

    test("has icon", () => {
        expect(screen.getByRole("img")).toHaveClass(icon);
    });
});
