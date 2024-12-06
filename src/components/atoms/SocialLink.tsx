import { type ReactElement } from "react";
import type { IconBaseProps } from "react-icons/lib";

interface SocialLinkProps {
    url: string;
    icon: ReactElement<IconBaseProps>;
    title: string;
}

const SocialLink = ({ url, icon, title }: SocialLinkProps) => (
    <a
        href={url}
        aria-label={title}
        title={title}
        block
        rel="me"
        clickable
        rounded-md
        p-1
    >
        <icon.type
            size-10
            text-secondary
            role="presentation"
            focusable={false}
        />
    </a>
);

export default SocialLink;
export type { SocialLinkProps };
