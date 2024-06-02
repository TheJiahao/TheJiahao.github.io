import type { Language } from "../interfaces/Language";
import en from "../localization/en";
import zh_cn from "../localization/zh-cn";

const languageObjects = [en, zh_cn];

const languageCodes = languageObjects.map((language) => language.code);
const languages: Record<string, Language> = Object.fromEntries(
    languageObjects.map((language) => [language.code, language]),
);

export { languageCodes, languages };
