import type { Language } from "interfaces/Language";
import en from "./en";

const zh_cn: Language = {
    ...en,
    name: "简体中文",
    code: "zh-cn",
    siteSource: "本站源代码",
    homePage: "首页",
    about: "关于",
    back: "返回",
    updated: "更新于",
    licensedUnder: "内容遵循",
    showNavigationMenu: "显示导航菜单",
    navigationLinks: "导航链接",
    settings: "设置",
    siteAvatar: "站长头像",
    socialLinks: "社交链接",
    blogList: "博客列表",
    externalLinks: "外部链接",
    search: "搜索",
    typeToSearch: "输入以搜索",
    searchResults: "搜索结果",
    noResults: "未找到结果",
    clear: "清空",
    loading: "加载中",
    projects: "项目",
};

export default zh_cn;
