import IconLink from "components/atoms/IconLink";
import { type ReactElement } from "react";
import type { IconBaseProps } from "react-icons/lib";

interface SocialLinkProps {
    url: string;
    icon: ReactElement<IconBaseProps>;
    label: string;
}

const SocialLink = ({ url, icon, label }: SocialLinkProps) => (
    <IconLink
        label={label}
        rel="me"
        url={url}
        icon={
            <icon.type
                className="size-10 color-secondary"
                role="presentation"
                focusable={false}
            />
        }
        onlyIcon={true}
    />
);

export default SocialLink;
export type { SocialLinkProps };
