import type { SocialLinkProps } from "components/atoms/SocialLink";
import { LuRss } from "react-icons/lu";
import { SiGithub, SiLinkedin } from "react-icons/si";

const SOCIAL_LINKS: SocialLinkProps[] = [
    {
        url: "https://github.com/TheJiahao",
        icon: <SiGithub />,
        title: "GitHub",
    },
    {
        url: "https://www.linkedin.com/in/jiahao-li-3380742a8",
        icon: <SiLinkedin />,
        title: "LinkedIn",
    },
    {
        url: "/rss.xml",
        icon: <LuRss />,
        title: "RSS",
    },
];

export { SOCIAL_LINKS };
