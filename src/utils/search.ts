import fuzzysort from "fuzzysort";
import type { Page } from "interfaces/Page";

const search = (keyword: string, pages: Page[]): Page[] => {
    return fuzzysort
        .go(keyword, pages, {
            limit: 5,
            threshold: 0.4,
            keys: ["title", "content"],
        })
        .map((result) => ({
            ...result.obj,
            title: result[0].highlight("<strong bg-cyan-2>", "</strong>"),
            content: result[1].highlight("<strong bg-cyan-2>", "</strong>"),
        }));
};

export { search };
