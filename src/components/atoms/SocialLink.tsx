import { cloneElement, type ReactElement } from "react";
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
        target="_blank"
        rel="me noopener noreferrer"
    >
        {cloneElement(icon, {
            className: "size-10",
            role: "presentation",
            focusable: false,
        })}
    </a>
);

export default SocialLink;
export type { SocialLinkProps };
