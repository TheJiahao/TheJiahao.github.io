import type { BlogCardProps } from "components/molecules/BlogCard";
import BlogCard from "components/molecules/BlogCard";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { getTranslation } from "utils/getTranslation";

interface ProjectListProps extends TranslatedElement {
    projects: BlogCardProps[];
}

const ProjectList = ({ projects, language }: ProjectListProps) => (
    <ul
        aria-label={getTranslation(language).projects}
        grid="~ cols-1"
        lg:grid-cols-2
        gap-10
    >
        {projects.map((blog) => (
            <li key={blog.title}>
                <BlogCard {...blog} />
            </li>
        ))}
    </ul>
);

export default ProjectList;
