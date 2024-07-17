import { search } from "utils/search";

const useSearch = async (keyword: string, languageCode: string) => {
    const url = `/${languageCode}/search-index.json`;

    const response = await fetch(url);

    if (!response.ok) {
        console.error(
            `${response.statusText}: Failed to fetch search index from ${url}.`,
        );
    }

    const pages = (await response.json()).data;

    return search(keyword, pages);
};

export default useSearch;
