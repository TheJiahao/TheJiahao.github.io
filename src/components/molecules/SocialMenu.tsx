import { getRelativeLocaleUrl } from "astro:i18n";
import type { SocialLinkProps } from "components/atoms/SocialLink";
import SocialLink from "components/atoms/SocialLink";
import Menu, { type MenuProps } from "components/molecules/Menu";
import { DEFAULT_LANGUAGE } from "config";
import SOCIAL_LINKS from "config/social";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { getTranslation } from "utils/getTranslation";

interface SocialMenuProps extends MenuProps, TranslatedElement {
    links?: SocialLinkProps[];
}

const SocialMenu = ({
    links = SOCIAL_LINKS,
    language = DEFAULT_LANGUAGE,
    ...props
}: SocialMenuProps) => (
    <Menu
        direction="row"
        aria-label={getTranslation(language).socialLinks}
        {...props}
    >
        {links.map(({ url, ...props }) => (
            <SocialLink
                key={url}
                url={
                    url.startsWith("/")
                        ? getRelativeLocaleUrl(language, url)
                        : url
                }
                {...props}
            />
        ))}
    </Menu>
);

export default SocialMenu;
