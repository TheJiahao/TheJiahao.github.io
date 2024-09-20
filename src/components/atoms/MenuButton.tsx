import LoadingIcon from "components/atoms/LoadingIcon";
import useHydrationState from "hooks/useHydrationState";
import {
    cloneElement,
    type AriaAttributes,
    type ButtonHTMLAttributes,
} from "react";
import { LuMenu, LuX } from "react-icons/lu";

interface MenuButtonProps
    extends AriaAttributes,
        ButtonHTMLAttributes<HTMLButtonElement> {
    expanded?: boolean;
}

const MenuButton = ({ expanded, ...props }: MenuButtonProps) => {
    const disabled = !useHydrationState();

    const icon = disabled ? <LoadingIcon /> : expanded ? <LuX /> : <LuMenu />;

    return (
        <button
            type="button"
            disabled={disabled}
            hoverable
            rounded-md
            {...props}
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
