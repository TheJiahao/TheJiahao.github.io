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
    <span flex items-center gap-4 text={color}>
        {icon}
        <span>{children}</span>
    </span>
);

export default IconComponent;
