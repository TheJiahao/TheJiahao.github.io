import IconComponent from "components/atoms/IconComponent";
import Menu, { type MenuProps } from "components/molecules/Menu";
import { DEFAULT_LANGUAGE } from "config";
import NAVIGATION_LINKS from "config/navigation";
import type { IconLink } from "interfaces/IconLink";
import { getTranslation } from "utils/getTranslation";

interface NavigationMenuProps extends MenuProps {
    links?: IconLink[];
    language?: string;
}

const NavigationMenu = ({
    language = DEFAULT_LANGUAGE,
    links = NAVIGATION_LINKS[language],
    ...props
}: NavigationMenuProps) => (
    <Menu aria-label={getTranslation(language).navigationLinks} {...props}>
        {links.map((link) => (
            <a key={link.text} href={link.url}>
                <IconComponent icon={link.icon}>{link.text}</IconComponent>
            </a>
        ))}
    </Menu>
);

export default NavigationMenu;
