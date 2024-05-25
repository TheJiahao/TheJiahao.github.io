import { DEFAULT_LOCALE } from "../config";
import en from "../localization/en";
import zh_cn from "../localization/zh-cn";
import type { Language } from "../interfaces/Language";

const translations = new Map<string, Language>([
    ["zh-cn", zh_cn],
    ["en", en],
]);

const locales = Array.from(translations.keys());

const getTranslation = (language: string): Language =>
    translations.get(language) || translations.get(DEFAULT_LOCALE)!;

export { getTranslation, locales };
