import type { ReactElement } from "react";
import type { XOR } from "ts-essentials";

interface Labeled {
    label: string;
}

interface NotLabeled {
    title: string;
}

type LabeledIconLinkProps = XOR<Labeled, NotLabeled> & {
    url: string;
    icon: ReactElement;
    rel?: string;
};

const IconLink = ({ label, title, url, icon, rel }: LabeledIconLinkProps) =>
    label ? (
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
            aria-label={title}
            title={title}
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
