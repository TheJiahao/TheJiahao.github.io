import useHydrationState from "hooks/useHydrationState";
import {
    cloneElement,
    type AriaAttributes,
    type ButtonHTMLAttributes,
} from "react";
import { LuLoader2, LuMenu, LuX } from "react-icons/lu";

interface MenuButtonProps
    extends AriaAttributes,
        ButtonHTMLAttributes<HTMLButtonElement> {
    expanded?: boolean;
}

const MenuButton = ({ expanded, ...props }: MenuButtonProps) => {
    const disabled = !useHydrationState();

    const icon = disabled ? <LuLoader2 /> : expanded ? <LuX /> : <LuMenu />;

    return (
        <button
            type="button"
            disabled={disabled}
            {...props}
            un-disabled="animate-spin size-15"
        >
            {cloneElement(icon, {
                className: "size-15",
                role: "presentation",
                focusable: false,
            })}
        </button>
    );
};

export default MenuButton;
