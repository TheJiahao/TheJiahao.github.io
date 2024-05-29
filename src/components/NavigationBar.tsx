import { getRelativeLocaleUrl } from "astro:i18n";
import { DEFAULT_LOCALE, SITE_AVATAR } from "../config";
import { getTranslation } from "../utils/translation";
import NavigationLink, { type NavigationLinkProps } from "./NavigationLink";

interface NavigationBarProps {
    language?: string;
    avatar?: ImageMetadata;
    links?: NavigationLinkProps[];
}

const getLinks = (language: string) => [
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
];

const NavigationBar = ({
    language = DEFAULT_LOCALE,
    avatar = SITE_AVATAR,
    links = getLinks(language),
}: NavigationBarProps) => {
    return (
        <nav
            flex="~ col"
            items-center
            p-4
            gap-4
            w-full
            mx-auto
            lg="card sticky top-0 h-screen max-w-25ch "
        >
            <header>
                <img
                    {...avatar}
                    alt="Avatar"
                    size-15ch
                    drop-shadow-md
                    rounded-full
                    object-contain
                    mx-auto
                />
                <h1 text="center xl" font-bold>
                    {getTranslation(language).siteTitle}
                </h1>
            </header>
            <ul space-y-4 text-xl>
                {links.map((link) => (
                    <li key={link.text}>
                        <NavigationLink {...link} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavigationBar;
