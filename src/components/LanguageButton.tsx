import { getRelativeLocaleUrl } from "astro:i18n";
import type { ChangeEventHandler } from "react";
import {
    languages as DEFAULT_LANGUAGES,
    getTranslation,
} from "../utils/translation";
import type { Language } from "../interfaces/Language";

interface LanguageButtonProps {
    lang: string;
    languages?: Pick<Language, "name" | "code">[];
}

const handleNavigation: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const language = event.target.value;
    window.location.href = getRelativeLocaleUrl(language, "/");
};

const LanguageButton = ({
    lang,
    languages = DEFAULT_LANGUAGES,
}: LanguageButtonProps) => (
    <div inline-flex items-center gap-2>
        <span className="i-fluent-emoji-flat-globe-with-meridians" />
        <select
            aria-label={getTranslation(lang).selectLanguage}
            onChange={handleNavigation}
        >
            {languages.map(({ name, code }) => (
                <option key={code} value={code} selected={code === lang}>
                    {name}
                </option>
            ))}
        </select>
    </div>
);

export default LanguageButton;
