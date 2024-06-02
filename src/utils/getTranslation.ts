import type { Language } from "interfaces/Language";
import { languages } from "localization";

const translations: Record<string, Language> = Object.fromEntries(
    languages.map((language) => [language.code, language]),
);

const getTranslation = (languageCode: string): Language => {
    if (!(languageCode in translations)) {
        throw new Error(`Invalid language code: ${languageCode}`);
    }

    return translations[languageCode];
};

export { getTranslation };
