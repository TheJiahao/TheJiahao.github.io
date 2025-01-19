import type { ReactElement } from "react";

interface LabeledIconLinkProps {
    url: string;
    label: string;
    icon: ReactElement;
}

const IconLink = ({ label, url, icon }: LabeledIconLinkProps) => (
    <a href={url} text="secondary lg" clickable card align-icon p-2 gap-2>
        {icon}
        {label}
    </a>
);

export default IconLink;
