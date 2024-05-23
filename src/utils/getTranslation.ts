import zh_cn from "../i18n/zh-cn";
import en from "../i18n/en";
import type { Language } from "../i18n/Language";
import defaultLanguage from "../i18n/default";

const languages = new Map<string, Language>([
    ["zh-cn", zh_cn],
    ["en", en],
]);

const getTranslation = (language: string): Language =>
    languages.get(language) || defaultLanguage;

export default getTranslation;
