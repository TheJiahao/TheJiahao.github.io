import { DEFAULT_LOCALE } from "../config";
import type { Language } from "../interfaces/Language";
import en from "../localization/en";
import zh_cn from "../localization/zh-cn";

const languages = [en, zh_cn];

const locales = languages.map((language) => language.code);
const translations: Record<string, Language> = Object.fromEntries(
    languages.map((language) => [language.code, language]),
);

const getTranslation = (language: string): Language =>
    translations[language] ?? translations[DEFAULT_LOCALE];

export { getTranslation, languages, locales };
