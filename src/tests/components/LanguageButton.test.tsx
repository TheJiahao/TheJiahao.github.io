import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, test, vi } from "vitest";
import LanguageButton from "../../components/LanguageButton";

describe("<LanguageButton/>", () => {
    const languages = [
        { name: "简体中文", code: "zh-cn" },
        { name: "English", code: "en" },
        { name: "Español", code: "es" },
        { name: "Français", code: "fr" },
        { name: "Suomi", code: "fi" },
    ];
    const mockHandleNavigation = vi.fn();

    beforeEach(() => {
        render(
            <LanguageButton
                lang="en"
                languages={languages}
                onChange={mockHandleNavigation}
            />,
        );
    });

    test("shows given language by default", () => {
        expect(screen.getByRole("option", { name: "English" })).toHaveAttribute(
            "selected",
        );
    });

    test("has all languages", () => {
        for (const { name } of languages) {
            expect(screen.getByRole("option", { name })).toBeInTheDocument();
        }
    });

    test("calls onChange", async () => {
        const user = userEvent.setup();

        await user.selectOptions(screen.getByRole("combobox"), "fi");

        expect(mockHandleNavigation).toHaveBeenCalledTimes(1);
    });
});
