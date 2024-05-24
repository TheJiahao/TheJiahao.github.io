import { DEFAULT_LOCALE, SITE_AVATAR } from "../config";
import { getTranslation } from "../utils/translation";
import NavigationLink, { type NavigationLinkProps } from "./NavigationLink";

interface NavigationBarProps {
    lang?: string;
    avatar?: ImageMetadata;
    links?: NavigationLinkProps[];
}

const getLinks = (lang: string) => [
    {
        url: "/",
        text: getTranslation(lang).homePage,
        icon: "i-fluent-emoji-flat-house",
    },
    {
        url: "/posts",
        text: getTranslation(lang).archive,
        icon: "i-fluent-emoji-flat-file-cabinet",
    },
    {
        url: "/about",
        text: getTranslation(lang).about,
        icon: "i-fluent-emoji-flat-star",
    },
];

const NavigationBar = ({
    lang = DEFAULT_LOCALE,
    avatar = SITE_AVATAR,
    links = getLinks(lang),
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
                <div>
                    <h1 text="center xl" font-bold>
                        {getTranslation(lang).siteTitle}
                    </h1>
                    <p text="base left">
                        {getTranslation(lang).siteDescription}
                    </p>
                </div>
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
