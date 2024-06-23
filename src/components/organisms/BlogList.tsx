import BlogCard, { type BlogCardProps } from "components/organisms/BlogCard";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { getTranslation } from "utils/getTranslation";

interface BlogListProps extends TranslatedElement {
    blogs: BlogCardProps[];
}

const BlogList = ({ blogs, language }: BlogListProps) => {
    return (
        <ul aria-label={getTranslation(language).blogList} flex="~ col" gap-10>
            {blogs.map((blog) => (
                <li key={blog.title}>
                    <BlogCard {...blog} />
                </li>
            ))}
        </ul>
    );
};

export default BlogList;
