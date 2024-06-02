import { getRelativeLocaleUrl } from "astro:i18n";
import type { IconLink } from "interfaces/IconLink";
import { languageCodes } from "localization";
import { getTranslation } from "utils/getTranslation";

const NAVIGATION_LINKS: Record<string, IconLink[]> = Object.fromEntries(
    languageCodes.map((language) => [
        language,
        [
            {
                url: getRelativeLocaleUrl(language, "/"),
                text: getTranslation(language).homePage,
                icon: "i-fluent-emoji-flat-house",
            },
            {
                url: getRelativeLocaleUrl(language, "/posts"),
                text: getTranslation(language).archive,
                icon: "i-fluent-emoji-flat-file-cabinet",
            },
            {
                url: getRelativeLocaleUrl(language, "/about"),
                text: getTranslation(language).about,
                icon: "i-fluent-emoji-flat-star",
            },
        ],
    ]),
);

export default NAVIGATION_LINKS;
