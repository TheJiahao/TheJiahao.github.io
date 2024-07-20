import type { Page } from "interfaces/Page";
import { search } from "utils/search";

const useSearch = (keyword: string, languageCode: string): Page[] => {
    const url = `/${languageCode}/search-index.json`;

    const response = fetch(url);

    if (!response.ok) {
        console.error(
            `${response.statusText}: Failed to fetch search index from ${url}.`,
        );
    }

    const pages = response.json().data;

    return search(keyword, pages);
};

export default useSearch;
