import fuzzysort from "fuzzysort";
import type { Page } from "interfaces/Page";
import type { PreparedPage } from "interfaces/PreparedPage";

/**
 * Search keyword in pages.
 *
 * @param keyword Keyword to search
 * @param pages Pages to search
 * @returns Pages that match the keyword. Keywords are highlighted.
 */
const search = (keyword: string, pages: (Page | PreparedPage)[]): Page[] => {
    return fuzzysort
        .go(keyword, pages, {
            limit: 5,
            threshold: 0.4,
            keys: ["title", "description"],
        })
        .map((result) => ({
            ...result.obj,
            title:
                result[0].highlight("<strong bg-cyan-2>", "</strong>") ||
                result.obj.title,
            description: result[1].highlight("<strong bg-cyan-2>", "</strong>"),
        }));
};

export { search };
