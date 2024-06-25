import type { PropsWithChildren, ReactElement } from "react";

interface IconComponentProps extends PropsWithChildren {
    icon?: ReactElement;
}

const IconComponent = ({ icon, children }: IconComponentProps) => (
    <span flex items-center gap-4>
        {icon}
        <span>{children}</span>
    </span>
);

export default IconComponent;
