import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/react";
import { getRelativeLocaleUrl } from "astro:i18n";
import IconComponent from "components/atoms/IconComponent";
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
        <IconComponent icon={<LuGlobe />}>
            <div>
                <Listbox
                    value={defaultLanguage}
                    onChange={handleNavigation}
                    disabled={disabled}
                >
                    <ListboxButton
                        aria-label={
                            getTranslation(defaultLanguage).selectLanguage
                        }
                        un-disabled="text-disabled"
                    >
                        <span inline-flex items-center gap-2>
                            {getTranslation(defaultLanguage).name}
                            <LuChevronDown aria-hidden />
                        </span>
                    </ListboxButton>

                    <ListboxOptions
                        className="[--anchor-gap:1rem] data-[closed]:opacity-0"
                        anchor="bottom end"
                        card
                        flex="~ col"
                        text-secondary
                        gap-1
                        transition={true}
                        duration-100
                        ease-in
                    >
                        {languages.map(({ name, code }) => (
                            <ListboxOption
                                key={code}
                                value={code}
                                p-2
                                hover="cursor-pointer bg-surface-tertiary"
                            >
                                {name}
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </Listbox>
            </div>
        </IconComponent>
    );
};

export default LanguageSelector;
