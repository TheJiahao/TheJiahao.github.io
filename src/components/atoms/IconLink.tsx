import type { ReactElement } from "react";

interface LabeledIconLinkProps {
    url: string;
    icon: ReactElement;
    label: string;
    onlyIcon?: boolean;
    rel?: string;
}

const IconLink = ({
    label,
    url,
    icon,
    onlyIcon = false,
    rel,
}: LabeledIconLinkProps) =>
    onlyIcon ? (
        <a
            href={url}
            rel={rel}
            text="secondary lg"
            clickable
            card
            align-icon
            p-2
            gap-2
        >
            {icon}
            {label}
        </a>
    ) : (
        <a
            href={url}
            aria-label={label}
            title={label}
            rel={rel}
            block
            clickable
            rounded-md
            p-1
        >
            {icon}
        </a>
    );

export default IconLink;
