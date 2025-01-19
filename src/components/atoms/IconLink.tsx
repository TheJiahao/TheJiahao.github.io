import type { AnchorHTMLAttributes, AriaAttributes, ReactElement } from "react";

interface LabeledIconLinkProps
    extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "icon">,
        AriaAttributes {
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
    ...props
}: LabeledIconLinkProps) =>
    onlyIcon ? (
        <a
            href={url}
            aria-label={label}
            title={label}
            rel={rel}
            block
            clickable
            rounded-md
            p-1
            {...props}
        >
            {icon}
        </a>
    ) : (
        <a
            href={url}
            rel={rel}
            text="secondary lg"
            clickable
            align-icon
            p-2
            gap-2
            {...props}
        >
            {icon}
            {label}
        </a>
    );

export default IconLink;
