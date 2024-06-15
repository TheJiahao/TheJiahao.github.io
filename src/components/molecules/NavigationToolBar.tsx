import { getRelativeLocaleUrl } from "astro:i18n";
import Avatar from "components/atoms/Avatar";
import { DEFAULT_LANGUAGE, SITE_AVATAR } from "config";
import useHydrationState from "hooks/useHydrationState";
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
}: NavigationToolBarProps) => {
    const disabled = !useHydrationState();

    return (
        <div
            role={role}
            {...props}
            w-full
            bg-white
            grid
            grid-cols-3
            items-center
        >
            <Avatar
                image={avatar}
                size="15"
                url={getRelativeLocaleUrl(language, "/about")}
            />

            <div />

            <button
                type="button"
                className="i-lucide:menu"
                disabled={disabled}
                onClick={handleExpand}
                aria-label={getTranslation(language).showNavigationMenu}
                un-disabled="animate-spin i-lucide-loader-circle size-15"
                justify-self-end
                size-15
                lg="hidden"
            />
        </div>
    );
};

export default NavigationToolBar;
