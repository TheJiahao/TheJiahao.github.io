import IconComponent from "components/atoms/IconComponent";
import Menu, { type MenuProps } from "components/molecules/Menu";
import NAVIGATION_LINKS from "config/navigation";
import type { IconLink } from "interfaces/IconLink";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { getTranslation } from "utils/getTranslation";

interface NavigationMenuProps extends MenuProps, TranslatedElement {
    links?: IconLink[];
}

const NavigationMenu = ({
    language,
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
