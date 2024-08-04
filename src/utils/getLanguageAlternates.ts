import { getAbsoluteLocaleUrl } from "astro:i18n";
import { getSlug } from "utils/getSlug";

type Alternate = { hrefLang: string; href: string };

/**
 * Maps each language to its alternate url.
 *
 * @param pathname Relative url of target. It should be prefixed with language.
 * @param languages Alternate languages of the pathname.
 * @returns List of alternate links.
 */
export const getLanguageAlternates = (
    pathname: string,
    languages: string[],
): Alternate[] =>
    languages.map((language) => ({
        hrefLang: language,
        href: getAbsoluteLocaleUrl(language, getSlug(pathname)),
    }));
