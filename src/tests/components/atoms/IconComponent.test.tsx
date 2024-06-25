import { render, screen } from "@testing-library/react";
import { LuSquare } from "react-icons/lu";
import { beforeEach, describe, expect, test } from "vitest";
import IconComponent from "../../../components/atoms/IconComponent";

describe("<IconComponent/>", () => {
    const text = "About";
    const icon = <LuSquare role="img" />;

    beforeEach(() => {
        render(<IconComponent icon={icon}>{text}</IconComponent>);
    });

    test("has text", () => {
        expect(screen.getByText(text)).toBeVisible();
    });

    test("has icon", () => {
        expect(screen.getByRole("img")).toBeVisible();
    });
});
