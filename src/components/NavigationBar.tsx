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
        <nav card sticky self-start top-0 text-left h-screen p-6>
            <img
                {...avatar}
                alt="Avatar"
                size-30
                drop-shadow-md
                rounded-full
                object-contain
            />
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <ul>
                {links.map((link) => (
                    <NavigationLink key={link.text} {...link} />
                ))}
            </ul>
        </nav>
    );
};

export default NavigationBar;
