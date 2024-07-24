import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchForm from "components/molecules/SearchForm";
import { languageCodes } from "localization";
import { getTranslation } from "utils/getTranslation";
import { beforeEach, describe, expect, test, vi } from "vitest";

describe("<SearchForm/>", () => {
    describe.each(languageCodes)("%s", (language) => {
        const onChange = vi.fn();
        const onReset = vi.fn();
        const user = userEvent.setup();

        describe("when given input", () => {
            let clearButton: HTMLElement;

            beforeEach(() => {
                render(
                    <SearchForm
                        language={language}
                        onChange={onChange}
                        onReset={onReset}
                        value={"Hello world!"}
                    />,
                );

                clearButton = screen.getByRole("button", {
                    name: getTranslation(language).clear,
                });
            });

            test("clear button is visible", () => {
                expect(clearButton).toBeVisible();
            });

            test("clicking clear button calls onReset", async () => {
                await user.click(clearButton);

                expect(onReset).toHaveBeenCalledTimes(1);
            });
        });

        describe("when no input given", () => {
            beforeEach(() => {
                render(
                    <SearchForm
                        language={language}
                        onChange={onChange}
                        onReset={onReset}
                        value={""}
                    />,
                );
            });

            test("clear button is hidden", () => {
                const clearButton = screen.queryByRole("button", {
                    name: getTranslation(language).clear,
                });

                expect(clearButton).not.toBeInTheDocument();
            });

            test("typing calls onChange", async () => {
                const searchInput = screen.getByRole("searchbox");

                await user.type(searchInput, "Hello world!");

                expect(onChange).toHaveBeenCalled();
            });
        });
    });
});
