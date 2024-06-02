import { render, screen } from "@testing-library/react";
import MenuButton from "components/molecules/MenuButton";
import { beforeEach, describe, expect, test } from "vitest";

describe("<MenuButton/>", () => {
    beforeEach(() => {
        render(<MenuButton language="en" />);
    });

    test("is visible", () => {
        expect(
            screen.getByRole("button", { name: "Show navigation menu" }),
        ).toBeVisible();
    });
});
