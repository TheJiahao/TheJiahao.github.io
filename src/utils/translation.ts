import en from "../i18n/en";
import zh_cn from "../i18n/zh-cn";
import type { Language } from "../interfaces/Language";

const translations = new Map<string, Language>([
    ["zh-cn", zh_cn],
    ["en", en],
]);

const defaultLocale = "zh-cn";
const locales = Array.from(translations.keys());

const getTranslation = (language: string): Language =>
    translations.get(language) || translations.get(defaultLocale)!;

export { defaultLocale, getTranslation, locales };
