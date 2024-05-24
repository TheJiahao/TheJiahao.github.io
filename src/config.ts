// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import getImage from "./utils/getImage";

export const SITE_TITLE = "Jiahao 的博客";
export const SITE_DESCRIPTION =
    "个人博客，内容可能涵盖工具配置、技术、数学等，不定时更新。";
export const SITE_AVATAR = await getImage("/src/assets/images/avatar.svg");
export const SITE_OWNER = "Jiahao Li";
export const SITE_LICENSE = {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};
export const SITE_START_YEAR = 2020;
export const SITE_SOURCE = "https://github.com/TheJiahao/TheJiahao.github.io";

export const BLOG_IMAGE_PLACEHOLDER = await getImage(
    "/src/assets/images/cover_placeholder.svg",
);

export const DEFAULT_LOCALE = "zh-cn";
