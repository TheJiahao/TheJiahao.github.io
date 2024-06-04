import { Children, type PropsWithChildren } from "react";

const Menu = ({ children }: PropsWithChildren) => (
    <ul role="menu" flex="~ col" gap-3 p-4 items-center justify-center text-xl>
        {Children.map(children, (child) => (
            <li role="menuitem">{child}</li>
        ))}
    </ul>
);

export default Menu;
