import studyPlannerImage from "assets/images/projects/study-planner.webp";
import tiraAIPlatformImage from "assets/images/projects/tira-ai-platform.webp";
import type { ImageCardProps } from "components/molecules/ImageCard";
import { languageCodes } from "localization";
interface RawProject extends Omit<ImageCardProps, "description"> {
    description?: Record<string, string>;
}

const rawProjects: RawProject[] = [
    {
        title: "study-planner",
        url: "https://github.com/TheJiahao/study-planner",
        description: {
            en: "Tool for generating compact schedules based on dependencies between courses and timing.",
            "zh-cn": "基于课程之间依赖关系和教学时间的时间表生成工具。",
        },
        image: studyPlannerImage,
    },
    {
        title: "kivi-sakset-paperi-tekoaly",
        url: "https://github.com/TheJiahao/kivi-sakset-paperi-tekoaly",
        description: {
            en: "Markov chain-based AI for rock-paper-scissors.",
            "zh-cn": "基于马尔可夫链的石头-剪刀-布 AI。",
        },
    },
    {
        title: "tira-ai-platform",
        url: "https://github.com/game-ai-platform-team/tira-ai-platform",
        description: {
            en: "Tool for testing game AIs. Can run AIs on HPC or locally.",
            "zh-cn": "游戏 AI 测试工具。可在 HPC 或本地运行 AI。",
        },
        image: tiraAIPlatformImage,
    },
    {
        title: "TheJiahao.github.io",
        url: "https://thejiahao.github.io/",
        description: {
            en: "Blog built with Astro and React.",
            "zh-cn": "用 Astro 和 React 构建的博客。",
        },
    },
];

const PROJECTS: Record<string, ImageCardProps[]> = Object.fromEntries(
    languageCodes.map((language) => {
        const projects = rawProjects.map(({ description, ...project }) => ({
            ...project,
            description: description?.[language],
        }));

        return [language, projects];
    }),
);

export { PROJECTS };
