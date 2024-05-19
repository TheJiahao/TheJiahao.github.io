import {
    NAVIGATION_LINKS,
    SITE_AVATAR,
    SITE_DESCRIPTION,
    SITE_TITLE,
} from "../config";
import NavigationLink from "./NavigationLink";

const NavigationBar = () => {
    return (
        <nav card sticky self-start top-0 text-left h-screen p-6>
            <img
                src={SITE_AVATAR}
                alt="Avatar"
                size-30
                drop-shadow-md
                rounded-full
                object-contain
            />
            <div>
                <h1>{SITE_TITLE}</h1>
                <p>{SITE_DESCRIPTION}</p>
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
