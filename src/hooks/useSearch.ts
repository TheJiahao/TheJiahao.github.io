import type { Page } from "interfaces/Page";
import { useEffect, useState } from "react";
import { search } from "utils/search";

const fetchData = async (url: string): Promise<Page[]> => {
    const response = await fetch(url);

    return (await response.json()) as Page[];
};

const useSearch = (keyword: string, languageCode: string): Page[] => {
    const [pages, setPages] = useState<Page[]>([]);

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
