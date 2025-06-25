import type { Page } from "interfaces/Page";
import type { Pagefind } from "interfaces/Pagefind";
import { useEffect, useState } from "react";
import { initPagefind } from "utils/initPagefind";
import { search } from "utils/search";

/**
 * Searches the keyword from search index in given language.
 *
 * @param keyword Keyword to search
 *  @param limit Maximum number of results
 * @returns Pages matching the keyword
 */
const useSearch = (keyword: string, limit: number = 5): Page[] => {
    const [pagefind, setPagefind] = useState<Pagefind | null>(null);
    const [results, setResults] = useState<Page[]>([]);

    useEffect(() => {
        initPagefind()
            .then((pf) => {
                setPagefind(pf);
            })
            .catch((error: unknown) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        if (!pagefind) {
            return;
        }

        search(pagefind, limit, keyword)
            .then((pages: Page[]) => {
                setResults(pages);
            })
            .catch((error: unknown) => {
                console.error(error);
            });
    }, [keyword]);

    return results;
};

export default useSearch;
