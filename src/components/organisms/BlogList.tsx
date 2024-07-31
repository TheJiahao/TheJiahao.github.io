import ImageCard, { type ImageCardProps } from "components/molecules/ImageCard";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { getTranslation } from "utils/getTranslation";

interface BlogListProps extends TranslatedElement {
    blogs: ImageCardProps[];
}

const BlogList = ({ blogs, language }: BlogListProps) => {
    return (
        <ul aria-label={getTranslation(language).blogList} flex="~ col" gap-10>
            {blogs.map((blog) => (
                <li key={blog.title}>
                    <ImageCard {...blog} />
                </li>
            ))}
        </ul>
    );
};

export default BlogList;
