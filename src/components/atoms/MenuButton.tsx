import useHydrationState from "hooks/useHydrationState";
import type { AriaAttributes, ButtonHTMLAttributes } from "react";

interface MenuButtonProps
    extends AriaAttributes,
        ButtonHTMLAttributes<HTMLButtonElement> {
    expanded?: boolean;
}

const MenuButton = ({ expanded, ...props }: MenuButtonProps) => {
    const disabled = !useHydrationState();

    return (
        <button
            type="button"
            className={!disabled && expanded ? "i-lucide-x" : "i-lucide:menu"}
            disabled={disabled}
            {...props}
            un-disabled="animate-spin i-lucide-loader-circle size-15"
            size-15
        />
    );
};

export default MenuButton;
