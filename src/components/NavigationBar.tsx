import {
    NAVIGATION_LINKS,
    SITE_AVATAR,
    SITE_DESCRIPTION,
    SITE_TITLE,
} from "../config";
import NavigationLink from "./NavigationLink";

interface NavigationBarProps {
    title?: string;
    description?: string;
    avatar?: string;
}

const NavigationBar = ({
    title = SITE_TITLE,
    description = SITE_DESCRIPTION,
    avatar = SITE_AVATAR,
}: NavigationBarProps) => {
    return (
        <nav card sticky self-start top-0 text-left h-screen p-6>
            <img
                src={avatar}
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
                {NAVIGATION_LINKS.map((link) => (
                    <NavigationLink key={link.text} {...link} />
                ))}
            </ul>
        </nav>
    );
};

export default NavigationBar;
