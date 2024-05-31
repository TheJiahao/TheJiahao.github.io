import type { PropsWithChildren } from "react";

interface IconTextProps extends PropsWithChildren {
    icon: string;
}

const IconText = ({ icon, children }: IconTextProps) => (
    <span inline-flex gap-1 leading-4 items-center>
        <span className={icon}></span>
        <span>{children}</span>
    </span>
);

export default IconText;
