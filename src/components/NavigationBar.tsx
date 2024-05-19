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
            p-2
            gap-4
        >
            <img
                {...avatar}
                alt="Avatar"
                size-30
                drop-shadow-md
                rounded-full
                object-contain
            />
            <div text-center>
                <h1 text-xl font-bold>
                    {title}
                </h1>
                <p text-base>{description}</p>
            </div>
            <ul space-y-4 text-xl>
                {links.map((link) => (
                    <NavigationLink key={link.text} {...link} />
                ))}
            </ul>
        </nav>
    );
};

export default NavigationBar;
