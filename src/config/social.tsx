import type { SocialLinkProps } from "components/atoms/SocialLink";
import { LuRss } from "react-icons/lu";
import { SiGithub } from "react-icons/si";

const SOCIAL_LINKS: SocialLinkProps[] = [
    {
        url: "https://github.com/TheJiahao",
        icon: <SiGithub />,
        title: "GitHub",
    },
    {
        url: "/rss.xml",
        icon: <LuRss />,
        title: "RSS",
    },
];

export default SOCIAL_LINKS;
