import fuzzysort from "fuzzysort";
import type { Page } from "interfaces/Page";

const search = (keyword: string, pages: Page[]): Page[] => {
    return fuzzysort
        .go(keyword, pages, {
            limit: 5,
            threshold: 0.5,
            keys: ["title", "content"],
        })
        .map((result) => result.obj);
};

export { search };
