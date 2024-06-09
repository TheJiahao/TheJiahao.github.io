import { Children, type AriaAttributes, type PropsWithChildren } from "react";

interface MenuProps extends PropsWithChildren, AriaAttributes {}

const Menu = ({ children, ...ariaProps }: MenuProps) => (
    <ul
        role="menu"
        {...ariaProps}
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
