import {
    NAVIGATION_LINKS,
    SITE_AVATAR,
    SITE_DESCRIPTION,
    SITE_TITLE,
} from "../config";
import NavigationLink, { type NavigationLinkProps } from "./NavigationLink";

interface NavigationBarProps {
    title?: string;
    description?: string;
    avatar?: ImageMetadata;
    links?: NavigationLinkProps[];
}

const NavigationBar = ({
    title = SITE_TITLE,
    description = SITE_DESCRIPTION,
    avatar = SITE_AVATAR,
    links = NAVIGATION_LINKS,
}: NavigationBarProps) => {
    return (
        <nav
            card
            sticky
            flex="~ col"
            items-center
            self-auto
            top-0
            h-screen
            p-6
            gap-4
            max-w-25ch
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
                        {title}
                    </h1>
                    <p text="base left">{description}</p>
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
