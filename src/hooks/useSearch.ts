import type { Page } from "interfaces/Page";
import type { PreparedPage } from "interfaces/PreparedPage";
import { useEffect, useState } from "react";
import { search } from "utils/search";

const fetchData = async (url: string): Promise<PreparedPage[]> => {
    const response = await fetch(url);

    return (await response.json()) as PreparedPage[];
};

/**
 * Searches the keyword from search index in given language.
 *
 * @param keyword Keyword to search
 * @param languageCode Language of pages to search
 * @returns Pages matching the keyword
 */
const useSearch = (keyword: string, languageCode: string): Page[] => {
    const [pages, setPages] = useState<PreparedPage[]>([]);

    useEffect(() => {
        fetchData(`/${languageCode}/search-index.json`)
            .then((data) => {
                setPages(data);
            })
            .catch((error: unknown) => {
                console.error(error);
            });
    }, []);

    return search(keyword, pages);
};

export default useSearch;
