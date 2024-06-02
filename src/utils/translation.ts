import { DEFAULT_LANGUAGE } from "config";
import type { Language } from "../interfaces/Language";
import en from "../localization/en";
import zh_cn from "../localization/zh-cn";

const languages = [en, zh_cn];

const languageCodes = languages.map((language) => language.code);
const translations: Record<string, Language> = Object.fromEntries(
    languages.map((language) => [language.code, language]),
);

const getTranslation = (languageCode: string): Language =>
    translations[languageCode] ?? translations[DEFAULT_LANGUAGE];

export { getTranslation, languageCodes, languages };
