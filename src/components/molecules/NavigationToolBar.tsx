import { getRelativeLocaleUrl } from "astro:i18n";
import Avatar from "components/atoms/Avatar";
import { DEFAULT_LANGUAGE, SITE_AVATAR } from "config";
import useHydrationState from "hooks/useHydrationState";
import type { MouseEventHandler } from "react";
import { getTranslation } from "utils/getTranslation";

interface NavigationToolBarProps {
    handleExpand: MouseEventHandler<HTMLButtonElement>;
    avatar?: ImageMetadata;
    language?: string;
}

const NavigationToolBar = ({
    handleExpand,
    avatar = SITE_AVATAR,
    language = DEFAULT_LANGUAGE,
}: NavigationToolBarProps) => {
    const disabled = !useHydrationState();

    return (
        <div role="menubar" aria-haspopup="true" grid grid-cols-3 items-center>
            <a href={getRelativeLocaleUrl(language, "/about")}>
                <Avatar image={avatar} size="15" />
            </a>

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
