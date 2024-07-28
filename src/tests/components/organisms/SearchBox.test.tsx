import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import SearchBox from "components/organisms/SearchBox";
import { languageCodes } from "localization";
import { getTranslation } from "utils/getTranslation";
import { beforeAll, beforeEach, describe, expect, test, vi } from "vitest";
import { mock } from "vitest-mock-extended";

describe("<SearchBox/>", () => {
    describe.each(languageCodes)("%s", (language) => {
        const fetchSpy = vi.spyOn(global, "fetch");
        const user = userEvent.setup();
        let searchInput: HTMLElement;

        beforeAll(() => {
            const image = mock<ImageMetadata>({ src: "imagelink.com" });
            const mockResponse: Response = mock<Response>({
                ok: true,
                // eslint-disable-next-line @typescript-eslint/require-await
                json: async () => [
                    {
                        title: "Hello world!",
                        description: "Result 1",
                        url: "/hello-world",
                        image,
                    },
                    {
                        title: "Result 2",
                        description: "Result 2",
                        url: "/result-2",
                        image,
                    },
                ],
            });
            fetchSpy.mockResolvedValue(mockResponse);
        });

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
