import type { PropsWithChildren, ReactElement } from "react";

interface IconComponentProps extends PropsWithChildren {
    icon?: ReactElement;
    color?: string;
}

const IconComponent = ({
    icon,
    color = "secondary",
    children,
}: IconComponentProps) => (
    <span className={`text-${color}`} flex items-center gap-4>
        {icon}
        <span>{children}</span>
    </span>
);

export default IconComponent;
