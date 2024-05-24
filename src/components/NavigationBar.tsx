import { NAVIGATION_LINKS, SITE_AVATAR } from "../config";
import { defaultLocale, getTranslation } from "../utils/translation";
import NavigationLink, { type NavigationLinkProps } from "./NavigationLink";

interface NavigationBarProps {
    lang?: string;
    avatar?: ImageMetadata;
    links?: NavigationLinkProps[];
}

const NavigationBar = ({
    lang = defaultLocale,
    avatar = SITE_AVATAR,
    links = NAVIGATION_LINKS,
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
