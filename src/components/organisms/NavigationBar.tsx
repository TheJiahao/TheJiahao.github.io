import { getRelativeLocaleUrl } from "astro:i18n";
import { DEFAULT_LANGUAGE, SITE_AVATAR } from "../../config";
import { getTranslation } from "../../utils/translation";
import IconComponent from "../IconComponent";
import { type IconLink } from "../../interfaces/IconLink";

interface NavigationBarProps {
    language?: string;
    avatar?: ImageMetadata;
    links?: IconLink[];
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
    language = DEFAULT_LANGUAGE,
    avatar = SITE_AVATAR,
    links = getLinks(language),
}: NavigationBarProps) => {
    return (
        <nav flex="~ col" gap-4 items-center lg="card p-2 h-full w-50">
            <header>
                <img
                    {...avatar}
                    alt="Avatar"
                    size-30
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
                        <a href={link.url} flex>
                            <IconComponent icon={link.icon}>{link.text}</IconComponent>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavigationBar;
