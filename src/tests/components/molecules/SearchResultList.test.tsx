import { render, screen } from "@testing-library/react";
import SearchResultList from "components/molecules/SearchResultList";
import type { Page } from "interfaces/Page";
import { languageCodes } from "localization";
import { getTranslation } from "utils/getTranslation";
import { describe, expect, test } from "vitest";
import { mock } from "vitest-mock-extended";

describe("<SearchResultList/>", () => {
    test("renders nothing when no results given", () => {
        const { container } = render(
            <SearchResultList results={undefined} language="en" />,
        );

        expect(container).toBeEmptyDOMElement();
    });

    describe.each(languageCodes)("%s", (language) => {
        test('renders "no results" message when given empty result list', () => {
            render(<SearchResultList results={[]} language={language} />);

            expect(
                screen.getByText(getTranslation(language).noResults),
            ).toBeVisible();
        });

        test("renders search results", () => {
            const image = mock<ImageMetadata>({ src: "imagelink.com" });
            const results: Page[] = [
                {
                    title: "First result",
                    description: "A search result",
                    url: "/first",
                    image,
                },
                {
                    title: "Second result",
                    description: "Another search result",
                    url: "/second",
                    image,
                },
            ];

            render(<SearchResultList results={results} language={language} />);

            expect(screen.getByText("First result")).toBeVisible();
            expect(screen.getByText("Second result")).toBeVisible();
        });
    });
});
