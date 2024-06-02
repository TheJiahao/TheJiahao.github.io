import en from "localization/en";
import zh_cn from "localization/zh-cn";

const languages = [zh_cn, en];
const languageCodes = languages.map((language) => language.code);

export { languageCodes, languages };
