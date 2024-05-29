import { getRelativeLocaleUrl } from "astro:i18n";
import type { ChangeEventHandler } from "react";
import {
    languages as DEFAULT_LANGUAGES,
    getTranslation,
} from "../utils/translation";
import type { Language } from "../interfaces/Language";

interface LanguageSelectorProps {
    lang: string;
    languages?: Pick<Language, "name" | "code">[];
    onChange?: ChangeEventHandler<HTMLSelectElement>;
}

const handleNavigation: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const language = event.target.value;
    window.location.href = getRelativeLocaleUrl(language, "/");
};

const LanguageSelector = ({
    lang,
    languages = DEFAULT_LANGUAGES,
    onChange = handleNavigation,
}: LanguageSelectorProps) => (
    <div inline-flex items-center gap-2>
        <span className="i-fluent-emoji-flat-globe-with-meridians" />
        <select
            aria-label={getTranslation(lang).selectLanguage}
            defaultValue={lang}
            onChange={onChange}
        >
            {languages.map(({ name, code }) => (
                <option key={code} value={code}>
                    {name}
                </option>
            ))}
        </select>
    </div>
);

export default LanguageSelector;
