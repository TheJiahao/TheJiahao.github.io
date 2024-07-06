import { getRelativeLocaleUrl } from "astro:i18n";
import type { IconLink } from "interfaces/IconLink";
import { languageCodes } from "localization";
import { LuArchive, LuHome, LuUser2 } from "react-icons/lu";
import { getTranslation } from "utils/getTranslation";

const NAVIGATION_LINKS: Record<string, IconLink[]> = Object.fromEntries(
    languageCodes.map((language) => [
        language,
        [
            {
                url: getRelativeLocaleUrl(language, "/"),
                text: getTranslation(language).homePage,
                icon: <LuHome />,
            },
            {
                url: getRelativeLocaleUrl(language, "/posts"),
                text: getTranslation(language).archive,
                icon: <LuArchive />,
            },
            {
                url: getRelativeLocaleUrl(language, "/about"),
                text: getTranslation(language).about,
                icon: <LuUser2 />,
            },
        ],
    ]),
);

export {NAVIGATION_LINKS};
