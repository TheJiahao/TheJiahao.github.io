import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LanguageSelector from "components/molecules/LanguageSelector";
import { getTranslation } from "utils/getTranslation";
import { beforeEach, describe, expect, test } from "vitest";

describe("<LanguageSelector/>", () => {
    const languages = ["zh-cn", "en"];

    beforeEach(() => {
        render(<LanguageSelector defaultLanguage="en" languages={languages} />);
    });

    test("shows given language by default", () => {
        expect(screen.getByRole("combobox")).toHaveTextContent("English");
    });

    test("has all languages", async () => {
        const user = userEvent.setup();
        const languageSelector = screen.getByRole("combobox", {
            name: "Select language",
        });

        await user.click(languageSelector);

        for (const language of languages) {
            expect(
                screen.getByRole("option", {
                    name: getTranslation(language).name,
                }),
            ).toBeInTheDocument();
        }
    });
});
