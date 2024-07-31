import type { ImageCardProps } from "components/molecules/ImageCard";
import ImageCard from "components/molecules/ImageCard";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { getTranslation } from "utils/getTranslation";

interface ProjectListProps extends TranslatedElement {
    projects: ImageCardProps[];
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
                <ImageCard {...blog} />
            </li>
        ))}
    </ul>
);

export default ProjectList;
