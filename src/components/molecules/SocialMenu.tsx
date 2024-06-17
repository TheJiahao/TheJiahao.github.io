import type { SocialLinkProps } from "components/atoms/SocialLink";
import SocialLink from "components/atoms/SocialLink";
import Menu from "components/molecules/Menu";
import SOCIAL_LINKS from "config/social";

interface SocialMenuProps {
    links?: SocialLinkProps[];
    language?: string;
}

const SocialMenu = ({ links = SOCIAL_LINKS }: SocialMenuProps) => (
    <Menu>
        {links.map((link) => (
            <SocialLink key={link.url} {...link} />
        ))}
    </Menu>
);

export default SocialMenu;
