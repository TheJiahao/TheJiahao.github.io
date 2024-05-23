import type { Language } from "./Language";
import defaultLanguage from "./default";

const zh_cn: Language = {
    ...defaultLanguage,
    name: "简体中文",
    siteTitle: "Jiahao 的博客",
    siteDescription:
        "个人博客，内容可能涵盖工具配置、技术、数学等，不定时更新。",
    homePage: "首页",
    archive: "归档",
    about: "关于",
};

export default zh_cn;
