import {
    Children,
    type AriaAttributes,
    type HTMLAttributes,
    type PropsWithChildren,
} from "react";

interface MenuProps
    extends PropsWithChildren,
        HTMLAttributes<HTMLUListElement>,
        AriaAttributes {
    /** Child component direction, defaults to column. */
    direction?: "row" | "col";
    itemClassName?: string;
}

const Menu = ({
    children,
    role = "menu",
    direction = "col",
    itemClassName,
    ...props
}: MenuProps) => (
    <ul
        role={role}
        {...props}
        flex={`~ ${direction}`}
        gap-3
        p-4
        justify-center
        text-xl
    >
        {Children.map(children, (child) => (
            <li role="menuitem" className={itemClassName}>
                {child}
            </li>
        ))}
    </ul>
);

export default Menu;
export type { MenuProps };
