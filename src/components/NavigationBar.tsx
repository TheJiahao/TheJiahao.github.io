import { SITE_AVATAR, SITE_DESCRIPTION, SITE_TITLE } from "../config";
import "../styles/card.css";
import NavigationBarLink from "./NavigationBarLink";

const links = [
    { href: "/", text: "首页", icon: "i-fluent-emoji-flat-house" },
    { href: "/posts", text: "归档", icon: "i-fluent-emoji-flat-file-cabinet" },
    { href: "/about", text: "关于", icon: "i-fluent-emoji-flat-star" },
];

const NavigationBar = () => {
    return (
        <nav
            className="card sticky"
            un-self="start"
            un-top="0"
            un-text="left"
            un-h="screen"
            un-p="6"
        >
            <img
                src={SITE_AVATAR}
                alt="Avatar"
                un-size="30"
                un-drop-shadow="md"
                un-rounded="full"
                un-object="contain"
            />
            <div>
                <h1>{SITE_TITLE}</h1>
                <p>{SITE_DESCRIPTION}</p>
            </div>
            <ul>
                {links.map((link) => (
                    <NavigationBarLink key={link.text} {...link} />
                ))}
            </ul>
        </nav>
    );
};

export default NavigationBar;
