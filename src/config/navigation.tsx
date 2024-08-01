import { getRelativeLocaleUrl } from "astro:i18n";
import type { IconLink } from "interfaces/IconLink";
import { languageCodes } from "localization";
import { LuHome, LuLightbulb, LuUser2 } from "react-icons/lu";
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
                url: getRelativeLocaleUrl(language, "/projects"),
                text: getTranslation(language).projects,
                icon: <LuLightbulb />,
            },
            {
                url: getRelativeLocaleUrl(language, "/about"),
                text: getTranslation(language).about,
                icon: <LuUser2 />,
            },
        ],
    ]),
);

const TOC_START_DEPTH = 2;
const TOC_END_DEPTH = 3;

export { NAVIGATION_LINKS, TOC_END_DEPTH, TOC_START_DEPTH };
