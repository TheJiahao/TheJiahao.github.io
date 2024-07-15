import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/react";
import { getRelativeLocaleUrl } from "astro:i18n";
import type { Language } from "interfaces/Language";
import { languages as DEFAULT_LANGUAGES } from "localization";
import { useEffect, useState } from "react";
import { LuChevronDown, LuGlobe } from "react-icons/lu";
import { getTranslation } from "utils/getTranslation";

interface LanguageSelectorProps {
    defaultLanguage: string;
    languages?: Pick<Language, "name" | "code">[];
}

const LanguageSelector = ({
    defaultLanguage,
    languages = DEFAULT_LANGUAGES,
}: LanguageSelectorProps) => {
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        setDisabled(false);
    }, []);

    const handleNavigation = (value: string) => {
        const language = value;

        setDisabled(true);
        window.location.href = getRelativeLocaleUrl(language, "/");
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
                align-icon
                gap-sm
                text-secondary
            >
                <LuGlobe aria-hidden />

                <span align-icon gap-1>
                    {getTranslation(defaultLanguage).name}
                    <LuChevronDown
                        className="group-data-[open]:rotate-180 transition"
                        aria-hidden
                    />
                </span>
            </ListboxButton>

            <ListboxOptions
                className="data-[closed]:opacity-0"
                anchor={{ to: "bottom end", gap: "1rem" }}
                card
                flex="~ col"
                text-secondary
                gap-1
                transition={true}
                duration-100
                ease-in
            >
                {languages.map(({ name, code }) => (
                    <ListboxOption key={code} value={code} p-2 clickable>
                        {name}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </Listbox>
    );
};

export default LanguageSelector;
