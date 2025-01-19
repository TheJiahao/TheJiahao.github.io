import { getRelativeLocaleUrl } from "astro:i18n";
import type { IconLinkProps } from "components/atoms/IconLink";
import { languageCodes } from "localization";
import { LuHouse, LuLightbulb, LuUserRound } from "react-icons/lu";
import { getTranslation } from "utils/getTranslation";

const NAVIGATION_LINKS: Record<string, IconLinkProps[]> = Object.fromEntries(
    languageCodes.map((language) => [
        language,
        [
            {
                url: getRelativeLocaleUrl(language),
                label: getTranslation(language).homePage,
                icon: <LuHouse />,
            },
            {
                url: getRelativeLocaleUrl(language, "/projects"),
                label: getTranslation(language).projects,
                icon: <LuLightbulb />,
            },
            {
                url: getRelativeLocaleUrl(language, "/about"),
                label: getTranslation(language).about,
                icon: <LuUserRound />,
            },
        ],
    ]),
);

const TOC_START_DEPTH = 2;
const TOC_END_DEPTH = 3;

export { NAVIGATION_LINKS, TOC_END_DEPTH, TOC_START_DEPTH };
