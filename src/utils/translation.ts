import { DEFAULT_LOCALE } from "../config";
import type { Language } from "../interfaces/Language";
import en from "../localization/en";
import zh_cn from "../localization/zh-cn";

const translations: Record<string, Language> = {
    "zh-cn": zh_cn,
    en,
};

const locales = Object.getOwnPropertyNames(translations);

const getTranslation = (language: string): Language =>
    translations[language] ?? translations[DEFAULT_LOCALE];

export { getTranslation, locales };
