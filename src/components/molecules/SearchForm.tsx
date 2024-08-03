import LoadingIcon from "components/atoms/LoadingIcon";
import useHydrationState from "hooks/useHydrationState";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import type { DOMAttributes, InputHTMLAttributes } from "react";
import { LuSearch, LuX } from "react-icons/lu";
import { getTranslation } from "utils/getTranslation";

interface SearchFormProps
    extends TranslatedElement,
        Required<
            Pick<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> &
                Pick<DOMAttributes<HTMLFormElement>, "onReset">
        > {}

const SearchForm = ({
    language,
    value,
    onChange,
    onReset,
}: SearchFormProps) => {
    const disabled = !useHydrationState();

    let icon = <LuSearch title={getTranslation(language).search} />;
    let placeholder = getTranslation(language).typeToSearch;

    if (disabled) {
        icon = <LoadingIcon aria-hidden />;
        placeholder = getTranslation(language).loading;
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
            }}
            align-icon
            gap-4
            p-4
            text="xl secondary"
            w-full
            onReset={onReset}
        >
            <label htmlFor="search">{icon}</label>

            <input
                type="search"
                id="search"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="[&::-webkit-search-cancel-button]:hidden"
                w-full
                outline-none
                bg-transparent
                disabled={disabled}
            />

            {value != "" && (
                <button
                    type="reset"
                    title={getTranslation(language).clear}
                    transition
                    ease-in-out
                    hover:text-accent-primary
                    active="text-accent-primary brightness-70 dark:brightness-125"
                >
                    <LuX />
                </button>
            )}
        </form>
    );
};

export default SearchForm;
