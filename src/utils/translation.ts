import defaultLanguage from "../i18n/defaultLanguage";
import en from "../i18n/en";
import zh_cn from "../i18n/zh-cn";
import type { Language } from "../interfaces/Language";

const languages = new Map<string, Language>([
    ["zh-cn", zh_cn],
    ["en", en],
]);

const getTranslation = (language: string): Language =>
    languages.get(language) || defaultLanguage;

export { getTranslation, languages };
