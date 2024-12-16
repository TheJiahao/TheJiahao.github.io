import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
    type ListboxButtonProps,
} from "@headlessui/react";
import { getRelativeLocaleUrl } from "astro:i18n";
import { languageCodes as DEFAULT_LANGUAGES } from "localization";
import { useEffect, useState } from "react";
import { LuCheck, LuChevronDown, LuGlobe } from "react-icons/lu";
import { getTranslation } from "utils/getTranslation";
interface LanguageSelectorProps extends ListboxButtonProps {
    defaultLanguage: string;
    languages?: string[];
    /** Slug of target page */
    slug?: string;
}

const LanguageSelector = ({
    defaultLanguage,
    languages = DEFAULT_LANGUAGES,
    slug,
    ...props
}: LanguageSelectorProps) => {
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        setDisabled(false);
    }, []);

    const handleNavigation = (value: string) => {
        const language = value;

        setDisabled(true);
        window.location.href = getRelativeLocaleUrl(language, slug);
    };

    return (
        <Listbox
            value={defaultLanguage}
            onChange={handleNavigation}
            disabled={disabled}
        >
            <ListboxButton
                aria-label={getTranslation(defaultLanguage).selectLanguage}
                un-disabled="text-disabled"
                role="combobox"
                className="group"
                {...props}
                clickable
                p-2
                rounded-md
                align-icon
                gap-sm
                text-secondary
            >
                <LuGlobe aria-hidden />

                <span align-icon gap-1>
                    {getTranslation(defaultLanguage).name}
                    <LuChevronDown
                        className="transition group-data-[open]:rotate-180"
                        aria-hidden
                    />
                </span>
            </ListboxButton>

            <ListboxOptions
                className="w-[var(--button-width)] data-[closed]:opacity-0 data-[focus]:outline-none"
                anchor={{ to: "bottom end", gap: "1rem" }}
                card
                flex="~ col"
                text-secondary
                gap-1
                transition={true}
                duration-100
                ease-in
            >
                {languages.map((code) => (
                    <ListboxOption
                        key={code}
                        value={code}
                        className="group data-[focus]:bg-hover data-[hover]:bg-hover"
                        clickable
                        align-icon
                        gap-3
                        p-2
                    >
                        <LuCheck className="invisible group-data-[selected]:visible" />
                        <span>{getTranslation(code).name}</span>
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </Listbox>
    );
};

export default LanguageSelector;
