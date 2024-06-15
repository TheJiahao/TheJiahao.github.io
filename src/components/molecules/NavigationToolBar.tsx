import { getRelativeLocaleUrl } from "astro:i18n";
import Avatar from "components/atoms/Avatar";
import MenuButton from "components/atoms/MenuButton";
import { DEFAULT_LANGUAGE, SITE_AVATAR } from "config";
import type { AriaAttributes, HTMLAttributes, MouseEventHandler } from "react";
import { getTranslation } from "utils/getTranslation";

interface NavigationToolBarProps
    extends HTMLAttributes<HTMLDivElement>,
        AriaAttributes {
    handleExpand: MouseEventHandler<HTMLButtonElement>;
    avatar?: ImageMetadata;
    language?: string;
}

const NavigationToolBar = ({
    handleExpand,
    avatar = SITE_AVATAR,
    language = DEFAULT_LANGUAGE,
    role = "toolbar",
    ...props
}: NavigationToolBarProps) => (
    <div role={role} {...props} w-full bg-white grid grid-cols-3 items-center>
        <Avatar
            image={avatar}
            size="15"
            alt={getTranslation(language).siteAvatar}
            url={getRelativeLocaleUrl(language, "/about")}
        />

        <div />

        <MenuButton
            onClick={handleExpand}
            aria-label={getTranslation(language).showNavigationMenu}
            justify-self-end
        />
    </div>
);

export default NavigationToolBar;
