import type { IconLinkProps } from "components/atoms/IconLink";
import IconLink from "components/atoms/IconLink";
import Menu, { type MenuProps } from "components/molecules/Menu";
import { NAVIGATION_LINKS } from "config";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { getTranslation } from "utils/getTranslation";

interface NavigationMenuProps extends MenuProps, TranslatedElement {
    links?: IconLinkProps[];
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
            <IconLink
                key={link.label}
                url={link.url}
                label={link.label}
                className={currentURL === link.url ? "highlighted" : undefined}
                aria-current={currentURL === link.url}
                icon={<link.icon.type aria-hidden />}
                rounded-md
            />
        ))}
    </Menu>
);

export default NavigationMenu;
