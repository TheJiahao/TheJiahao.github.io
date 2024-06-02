import IconComponent from "components/atoms/IconComponent";
import Menu from "components/molecules/Menu";
import { DEFAULT_LANGUAGE } from "config";
import NAVIGATION_LINKS from "config/navigation";
import type { IconLink } from "interfaces/IconLink";

interface NavigationMenuProps {
    links?: IconLink[];
    language?: string;
}

const NavigationMenu = ({
    language = DEFAULT_LANGUAGE,
    links = NAVIGATION_LINKS[language],
}: NavigationMenuProps) => (
    <Menu>
        {links.map((link) => (
            <a key={link.text} href={link.url}>
                <IconComponent icon={link.icon}>{link.text}</IconComponent>
            </a>
        ))}
    </Menu>
);

export default NavigationMenu;
