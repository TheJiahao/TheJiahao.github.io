import { Children, type PropsWithChildren } from "react";

const Menu = ({ children }: PropsWithChildren) => (
    <ul flex="~ col" gap-3 p-4 items-center justify-center text-xl>
        {Children.map(children, (child) => (
            <li>{child}</li>
        ))}
    </ul>
);

export default Menu;
