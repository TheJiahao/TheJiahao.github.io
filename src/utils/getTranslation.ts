import defaultLanguage from "../i18n/defaultLanguage";
import languages from "../i18n/languages";
import type { Language } from "../interfaces/Language";

const getTranslation = (language: string): Language =>
    languages.get(language) || defaultLanguage;

export default getTranslation;
