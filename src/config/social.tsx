import { getRelativeLocaleUrl } from "astro:i18n";
import type { IconLinkProps } from "components/atoms/IconLink";
import { languageCodes } from "localization";
import { LuRss } from "react-icons/lu";
import { SiGithub, SiLinkedin } from "react-icons/si";

const SOCIAL_LINKS: Record<string, IconLinkProps[]> = Object.fromEntries(
    languageCodes.map((language) => [
        language,
        [
            {
                url: "https://github.com/TheJiahao",
                icon: <SiGithub />,
                label: "GitHub",
            },
            {
                url: "https://www.linkedin.com/in/jiahao-li-3380742a8",
                icon: <SiLinkedin />,
                label: "LinkedIn",
            },
            {
                url: getRelativeLocaleUrl(language, "/rss.xml"),
                icon: <LuRss />,
                label: "RSS",
            },
        ],
    ]),
);

export { SOCIAL_LINKS };
