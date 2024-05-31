import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import ToolBar from "../../../components/organisms/ToolBar";

describe("<ToolBar/>", () => {
    beforeEach(() => {
        render(<ToolBar language="en" />);
    });

    test("has language selector", () => {
        expect(
            screen.getByRole("combobox", { name: "Select language" }),
        ).toBeVisible();
    });
});
