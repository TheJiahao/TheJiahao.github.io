import useHydrationState from "hooks/useHydrationState";
import type { AriaAttributes, ButtonHTMLAttributes } from "react";

const MenuButton = (
    props: AriaAttributes & ButtonHTMLAttributes<HTMLButtonElement>,
) => (
    <button
        type="button"
        className="i-lucide:menu"
        disabled={!useHydrationState()}
        {...props}
        un-disabled="animate-spin i-lucide-loader-circle size-15"
        size-15
    />
);

export default MenuButton;
