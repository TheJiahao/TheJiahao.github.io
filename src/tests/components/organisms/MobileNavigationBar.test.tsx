import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MobileNavigationBar from "components/organisms/MobileNavigationBar";
import { getTranslation } from "utils/getTranslation";
import { beforeEach, describe, expect, test } from "vitest";

describe("<MobileNavigationBar/>", () => {
    const user = userEvent.setup();
    let menuButton: HTMLElement;
    let toolBar: HTMLElement;

    beforeEach(() => {
        render(<MobileNavigationBar language="zh-cn" />);
        menuButton = screen.getByRole("button", {
            name: getTranslation("zh-cn").showNavigationMenu,
        });
    });

    describe("menu", () => {
        beforeEach(() => {
            toolBar = screen.getByRole("toolbar");
        });

        test("is hidden by default", () => {
            expect(toolBar).toHaveAttribute("aria-expanded", "false");
        });

        test("is visible after clicking menu button", async () => {
            await user.click(menuButton);

            expect(toolBar).toHaveAttribute("aria-expanded", "true");
        });

        test("is hidden after clicking menu button twice", async () => {
            await user.dblClick(menuButton);

            expect(toolBar).toHaveAttribute("aria-expanded", "false");
        });
    });
});
