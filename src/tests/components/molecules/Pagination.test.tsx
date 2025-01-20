import { render, screen } from "@testing-library/react";
import Pagination from "components/molecules/Pagination";
import { languageCodes } from "localization";
import { getTranslation } from "utils/getTranslation";
import { describe, expect, test } from "vitest";

describe("<Pagination/>", () => {
    describe.each(languageCodes)("%s", (language) => {
        test("shows current page number", () => {
            render(<Pagination language={language} currentPage={5} />);

            const pagination = screen.getByRole("navigation");

            expect(pagination).toHaveTextContent("5");
        });

        test("has correct link to previous page", () => {
            const url = "/previous";

            render(
                <Pagination
                    language={language}
                    currentPage={2}
                    previousURL={url}
                />,
            );

            const link = screen.getByRole("link", {
                name: getTranslation(language).previousPage,
            });

            expect(link).toHaveAttribute("href", url);
        });

        test("has correct link to next page", () => {
            const url = "/next";

            render(
                <Pagination
                    language={language}
                    currentPage={2}
                    nextURL={url}
                />,
            );

            const link = screen.getByRole("link", {
                name: getTranslation(language).nextPage,
            });

            expect(link).toHaveAttribute("href", url);
        });

        test("disables previous link when no URL given", () => {
            render(
                <Pagination
                    language={language}
                    currentPage={2}
                    nextURL="/next"
                />,
            );

            const link = screen.getByRole("link", {
                name: getTranslation(language).previousPage,
            });

            expect(link).toHaveAttribute("aria-disabled", "true");
        });

        test("disables next link when no URL given", () => {
            render(
                <Pagination
                    language={language}
                    currentPage={2}
                    previousURL="/previous"
                />,
            );

            const link = screen.getByRole("link", {
                name: getTranslation(language).nextPage,
            });

            expect(link).toHaveAttribute("aria-disabled", "true");
        });
    });
});
