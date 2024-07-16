import useHydrationState from "hooks/useHydrationState";
import type { AriaAttributes, ButtonHTMLAttributes } from "react";
import { LuSearch } from "react-icons/lu";

type SearchButtonProps = AriaAttributes &
    ButtonHTMLAttributes<HTMLButtonElement>;

const SearchButton = ({ ...props }: SearchButtonProps) => (
    <button type="submit" disabled={!useHydrationState()} {...props}>
        <LuSearch size-15 />
    </button>
);

export default SearchButton;
