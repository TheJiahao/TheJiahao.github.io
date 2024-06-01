import { getRelativeLocaleUrl } from "astro:i18n";
import { DEFAULT_LANGUAGE, SITE_AVATAR } from "../../config";
import { type IconLink } from "../../interfaces/IconLink";
import { getTranslation } from "../../utils/translation";
import IconComponent from "../atoms/IconComponent";

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
        <nav card p-4 flex="~ col" gap-4 items-center lg="card h-full w-50">
            <div
                w-full
                sticky
                bottom-0
                grid
                grid-cols-3
                items-center
                lg="block"
            >
                <img
                    {...avatar}
                    alt="Avatar"
                    size-15
                    drop-shadow-md
                    rounded-full
                    object-contain
                    lg="size-30 mx-auto"
                />

                <div />

                <div
                    className="i-ic-round-menu"
                    justify-self-end
                    size-15
                    lg="hidden"
                />

                <h1 className="hidden" lg="block text-center text-xl font-bold">
                    {getTranslation(language).siteTitle}
                </h1>
            </div>

            <ul className="hidden" lg="block" space-y-4 text-xl>
                {links.map((link) => (
                    <li key={link.text}>
                        <a href={link.url} flex>
                            <IconComponent icon={link.icon}>
                                {link.text}
                            </IconComponent>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavigationBar;
