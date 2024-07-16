import useHydrationState from "hooks/useHydrationState";
import type { AriaAttributes, ButtonHTMLAttributes } from "react";
import { LuSearch } from "react-icons/lu";

type SearchButtonProps = AriaAttributes &
    ButtonHTMLAttributes<HTMLButtonElement>;

const SearchButton = ({ ...props }: SearchButtonProps) => (
    <button disabled={!useHydrationState()} {...props}>
        <LuSearch />
    </button>
);

export default SearchButton;
