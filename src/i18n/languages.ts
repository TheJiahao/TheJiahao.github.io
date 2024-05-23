import zh_cn from "../i18n/zh-cn";
import en from "../i18n/en";
import type { Language } from "../interfaces/Language";

const languages = new Map<string, Language>([
    ["zh-cn", zh_cn],
    ["en", en],
]);

export default languages;
