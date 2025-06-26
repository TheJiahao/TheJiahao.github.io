import type { Page } from "interfaces/Page";
import type { Pagefind } from "interfaces/Pagefind";

/**
 * Search keyword in pages.
 *
 * @param pagefind Pagefind instance
 *  @param limit Maximum number of results
 * @param keyword Keyword to search
 * @returns Pages that match the keyword. Keywords are highlighted.
 */
const search = async (
    pagefind: Pagefind,
    limit: number,
    keyword: string,
): Promise<Page[]> => {
    const rawResults = await Promise.all(
        (await pagefind.search(keyword)).results
            .slice(0, limit - 1)
            .map(async ({ data }) => await data()),
    );

    const results = await Promise.all(
        rawResults.map((result) => ({
            title: result.meta.title,
            description: result.excerpt,
            url: result.url,
            image: result.meta.image,
        })),
    );

    return results;
};

export { search };
