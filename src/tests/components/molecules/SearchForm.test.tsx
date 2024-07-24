import { render, screen } from "@testing-library/react";
import SearchForm from "components/molecules/SearchForm";
import { languageCodes } from "localization";
import { getTranslation } from "utils/getTranslation";
import { beforeEach, describe, expect, test, vi } from "vitest";

describe("<SearchForm/>", () => {
    describe.each(languageCodes)("%s", (language) => {
        const onChange = vi.fn();
        const onReset = vi.fn();

        describe("when given input", () => {
            beforeEach(() => {
                render(
                    <SearchForm
                        language={language}
                        onChange={onChange}
                        onReset={onReset}
                        value={"Hello world!"}
                    />,
                );
            });

            test("clear button is visible", () => {
                const clearButton = screen.queryByRole("button", {
                    name: getTranslation(language).clear,
                });

                expect(clearButton).toBeVisible();
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
        });
    });
});
