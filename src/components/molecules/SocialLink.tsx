import IconLink from "components/atoms/IconLink";
import { type ReactElement } from "react";
import type { IconBaseProps } from "react-icons/lib";

interface SocialLinkProps {
    url: string;
    icon: ReactElement<IconBaseProps>;
    title: string;
}

const SocialLink = ({ url, icon, title }: SocialLinkProps) => (
    <IconLink
        title={title}
        rel="me"
        url={url}
        icon={
            <icon.type
                className="size-10 color-secondary"
                role="presentation"
                focusable={false}
            />
        }
    />
);

export default SocialLink;
export type { SocialLinkProps };
