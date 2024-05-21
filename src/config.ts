// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import getImage from "./utils/getImage";

export const SITE_TITLE = "Jiahao 的博客";
export const SITE_DESCRIPTION =
    "个人博客，内容可能涵盖工具配置、技术、数学等，不定时更新。";
export const SITE_AVATAR = await getImage("/src/assets/images/avatar.svg");

export const NAVIGATION_LINKS = [
    { url: "/", text: "首页", icon: "i-fluent-emoji-flat-house" },
    { url: "/posts", text: "归档", icon: "i-fluent-emoji-flat-file-cabinet" },
    { url: "/about", text: "关于", icon: "i-fluent-emoji-flat-star" },
];

export const BLOG_IMAGE_PLACEHOLDER = await getImage(
    "/src/assets/images/cover_placeholder.svg",
);
