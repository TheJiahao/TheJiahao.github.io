import { getRelativeLocaleUrl } from "astro:i18n";
import type { IconLink } from "interfaces/IconLink";
import { languageCodes } from "localization";
import { LuHouse, LuLightbulb, LuUserRound } from "react-icons/lu";
import { getTranslation } from "utils/getTranslation";

const NAVIGATION_LINKS: Record<string, IconLink[]> = Object.fromEntries(
    languageCodes.map((language) => [
        language,
        [
            {
                url: getRelativeLocaleUrl(language, "/posts"),
                text: getTranslation(language).homePage,
                icon: <LuHouse />,
            },
            {
                url: getRelativeLocaleUrl(language, "/projects"),
                text: getTranslation(language).projects,
                icon: <LuLightbulb />,
            },
            {
                url: getRelativeLocaleUrl(language, "/about"),
                text: getTranslation(language).about,
                icon: <LuUserRound />,
            },
        ],
    ]),
);

const TOC_START_DEPTH = 2;
const TOC_END_DEPTH = 3;

export { NAVIGATION_LINKS, TOC_END_DEPTH, TOC_START_DEPTH };
