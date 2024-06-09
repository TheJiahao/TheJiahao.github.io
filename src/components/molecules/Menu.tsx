import {
    Children,
    type AriaAttributes,
    type HTMLAttributes,
    type PropsWithChildren,
} from "react";

interface MenuProps
    extends PropsWithChildren,
        HTMLAttributes<HTMLUListElement>,
        AriaAttributes {}

const Menu = ({ children, role = "menu", ...props }: MenuProps) => (
    <ul
        role={role}
        {...props}
        flex="~ col"
        gap-3
        p-4
        items-center
        justify-center
        text-xl
    >
        {Children.map(children, (child) => (
            <li role="menuitem">{child}</li>
        ))}
    </ul>
);

export default Menu;
