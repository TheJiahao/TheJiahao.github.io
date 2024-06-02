import { getRelativeLocaleUrl } from "astro:i18n";
import IconComponent from "components/atoms/IconComponent";
import type { Language } from "interfaces/Language";
import { languages as DEFAULT_LANGUAGES } from "localization";
import { useEffect, useState, type ChangeEventHandler } from "react";
import { getTranslation } from "utils/translation";

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

    const handleNavigation: ChangeEventHandler<HTMLSelectElement> = (event) => {
        const language = event.target.value;

        setDisabled(true);
        window.location.href = getRelativeLocaleUrl(language, "/");
    };

    return (
        <IconComponent icon="i-fluent-emoji-flat-globe-with-meridians">
            <select
                aria-label={getTranslation(defaultLanguage).selectLanguage}
                defaultValue={defaultLanguage}
                onChange={handleNavigation}
                disabled={disabled}
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
