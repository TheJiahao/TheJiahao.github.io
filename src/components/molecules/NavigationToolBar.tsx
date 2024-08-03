import Avatar from "components/atoms/Avatar";
import MenuButton from "components/atoms/MenuButton";
import { SITE_AVATAR } from "config";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import type { AriaAttributes, HTMLAttributes, MouseEventHandler } from "react";
import { getTranslation } from "utils/getTranslation";

interface NavigationToolBarProps
    extends HTMLAttributes<HTMLDivElement>,
        AriaAttributes,
        TranslatedElement {
    handleExpand: MouseEventHandler<HTMLButtonElement>;
    avatar?: ImageMetadata;
    expanded?: boolean;
}

const NavigationToolBar = ({
    handleExpand,
    avatar = SITE_AVATAR,
    language,
    role = "toolbar",
    expanded,
    ...props
}: NavigationToolBarProps) => (
    <div role={role} {...props} w-full grid grid-cols-3 items-center>
        <Avatar
            image={avatar}
            size="15"
            alt={getTranslation(language).siteAvatar}
        />

        <div />

        <MenuButton
            onClick={handleExpand}
            aria-label={getTranslation(language).showNavigationMenu}
            expanded={expanded}
            justify-self-end
        />
    </div>
);

export default NavigationToolBar;
