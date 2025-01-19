import type { SocialLinkProps } from "components/molecules/SocialLink";
import { LuRss } from "react-icons/lu";
import { SiGithub, SiLinkedin } from "react-icons/si";

const SOCIAL_LINKS: SocialLinkProps[] = [
    {
        url: "https://github.com/TheJiahao",
        icon: <SiGithub />,
        label: "GitHub",
    },
    {
        url: "https://www.linkedin.com/in/jiahao-li-3380742a8",
        icon: <SiLinkedin />,
        label: "LinkedIn",
    },
    {
        url: "/rss.xml",
        icon: <LuRss />,
        label: "RSS",
    },
];

export { SOCIAL_LINKS };
