import { getRelativeLocaleUrl } from "astro:i18n";
import type { SocialLinkProps } from "components/atoms/SocialLink";
import SocialLink from "components/atoms/SocialLink";
import Menu from "components/molecules/Menu";
import { DEFAULT_LANGUAGE } from "config";
import SOCIAL_LINKS from "config/social";

interface SocialMenuProps {
    links?: SocialLinkProps[];
    language?: string;
}

const SocialMenu = ({
    links = SOCIAL_LINKS,
    language = DEFAULT_LANGUAGE,
}: SocialMenuProps) => (
    <Menu direction="row">
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
