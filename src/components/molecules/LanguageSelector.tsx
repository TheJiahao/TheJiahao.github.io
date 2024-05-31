import { getRelativeLocaleUrl } from "astro:i18n";
import { useEffect, useState, type ChangeEventHandler } from "react";
import type { Language } from "../../interfaces/Language";
import {
    languages as DEFAULT_LANGUAGES,
    getTranslation,
} from "../../utils/translation";
import IconComponent from "../atoms/IconComponent";

interface LanguageSelectorProps {
    defaultLanguage: string;
    languages?: Pick<Language, "name" | "code">[];
    onChange?: ChangeEventHandler<HTMLSelectElement>;
}

const handleNavigation: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const language = event.target.value;
    window.location.href = getRelativeLocaleUrl(language, "/");
};

const LanguageSelector = ({
    defaultLanguage,
    languages = DEFAULT_LANGUAGES,
    onChange = handleNavigation,
}: LanguageSelectorProps) => {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    return (
        <IconComponent icon="i-fluent-emoji-flat-globe-with-meridians">
            <select
                aria-label={getTranslation(defaultLanguage).selectLanguage}
                defaultValue={defaultLanguage}
                onChange={onChange}
                disabled={!hydrated}
            >
                {languages.map(({ name, code }) => (
                    <option key={code} value={code}>
                        {name}
                    </option>
                ))}
            </select>
        </IconComponent>
    );
};

export default LanguageSelector;
