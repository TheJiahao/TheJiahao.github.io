import en from "./en";
import zh_cn from "./zh-cn";

const languages = [zh_cn, en];
const languageCodes = languages.map((language) => language.code);

export { languageCodes, languages };
