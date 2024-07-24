import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import SearchBox from "components/organisms/SearchBox";
import { languageCodes } from "localization";
import { getTranslation } from "utils/getTranslation";
import { beforeEach, describe, expect, test } from "vitest";

describe("<SearchBox/>", () => {
    describe.each(languageCodes)("%s", (language) => {
        const user = userEvent.setup();
        let searchInput: HTMLElement;

        beforeEach(() => {
            render(<SearchBox language={language} />);
            searchInput = screen.getByRole("searchbox");
        });

        describe("clear button", () => {
            test("is hidden when by default", () => {
                const clearButton = screen.queryByRole("button", {
                    name: getTranslation(language).clear,
                });

                expect(clearButton).not.toBeInTheDocument();
            });

            describe("after typing", () => {
                let clearButton: HTMLElement;

                beforeEach(async () => {
                    await user.type(searchInput, "Hello world!");

                    clearButton = screen.getByRole("button", {
                        name: getTranslation(language).clear,
                    });
                });

                test("is visible", () => {
                    expect(clearButton).toBeVisible();
                });

                test("clicking it clears input", async () => {
                    await user.click(clearButton);

                    expect(searchInput).toHaveValue("");
                });

                test("clearing hides button", async () => {
                    await user.click(clearButton);

                    expect(clearButton).not.toBeInTheDocument();
                });
            });
        });
    });
});
