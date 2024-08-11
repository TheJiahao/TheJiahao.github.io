import Menu, { type MenuProps } from "components/molecules/Menu";
import { NAVIGATION_LINKS } from "config";
import type { IconLink } from "interfaces/IconLink";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { cloneElement } from "react";
import { getTranslation } from "utils/getTranslation";

interface NavigationMenuProps extends MenuProps, TranslatedElement {
    links?: IconLink[];
    currentURL: string;
}

const NavigationMenu = ({
    language,
    links = NAVIGATION_LINKS[language],
    currentURL,
    ...props
}: NavigationMenuProps) => (
    <Menu
        aria-label={getTranslation(language).navigationLinks}
        text-secondary
        {...props}
    >
        {links.map((link) => (
            <a
                key={link.text}
                href={link.url}
                className={
                    currentURL === link.url ? "text-accent-primary" : undefined
                }
                aria-current={currentURL === link.url}
                align-icon
                gap-lg
                clickable
                p-2
                rounded-md
            >
                {cloneElement(link.icon, {
                    "aria-hidden": true,
                })}
                {link.text}
            </a>
        ))}
    </Menu>
);

export default NavigationMenu;
