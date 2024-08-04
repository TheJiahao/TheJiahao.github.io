import { getAbsoluteLocaleUrl } from "astro:i18n";
import { getSlug } from "utils/getSlug";

type Alternate = { hrefLang: string; href: string };

export const getLanguageAlternates = (
    pathname: string,
    languages: string[],
): Alternate[] =>
    languages.map((language) => ({
        hrefLang: language,
        href: getAbsoluteLocaleUrl(language, getSlug(pathname)),
    }));
