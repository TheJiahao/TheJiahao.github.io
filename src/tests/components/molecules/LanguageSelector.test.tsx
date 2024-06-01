import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import LanguageSelector from "../../../components/molecules/LanguageSelector";

describe("<LanguageSelector/>", () => {
    const languages = [
        { name: "简体中文", code: "zh-cn" },
        { name: "English", code: "en" },
        { name: "Español", code: "es" },
        { name: "Français", code: "fr" },
        { name: "Suomi", code: "fi" },
    ];

    beforeEach(() => {
        render(<LanguageSelector defaultLanguage="en" languages={languages} />);
    });

    test("shows given language by default", () => {
        expect(screen.getByRole("option", { name: "English" })).toHaveAttribute(
            "selected",
        );
    });

    test("has all languages", () => {
        for (const { name } of languages) {
            expect(screen.getByRole("option", { name })).toBeVisible();
        }
    });
});
