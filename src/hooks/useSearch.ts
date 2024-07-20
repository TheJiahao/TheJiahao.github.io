import type { Page } from "interfaces/Page";
import { useEffect, useState } from "react";
import { search } from "utils/search";

const useSearch = (keyword: string, languageCode: string): Page[] => {
    const [pages, setPages] = useState<Page[]>(new Array<Page>());

    useEffect(() => {
        const url = `/${languageCode}/search-index.json`;

        fetch(url)
            .then((response) => {
                response
                    .json()
                    .then((data: Page[]) => {
                        setPages(data);
                    })
                    .catch(() => {
                        console.error("Failed to parse JSON");
                    });
            })
            .catch((error: unknown) => {
                console.error(error);
            });
    });

    return search(keyword, pages);
};

export default useSearch;
