import type { PropsWithChildren } from "react";

interface IconComponentProps extends PropsWithChildren {
    icon: string;
}

const IconComponent = ({ icon, children }: IconComponentProps) => (
    <span inline-flex gap-1 leading-4 items-center>
        <span role="img" className={icon}></span>
        <span>{children}</span>
    </span>
);

export default IconComponent;
