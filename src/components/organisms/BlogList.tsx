import BlogCard, { type BlogCardProps } from "components/organisms/BlogCard";

const BlogList = ({ blogs }: { blogs: BlogCardProps[] }) => {
    return (
        <ul aria-label="List of blogs" flex="~ col" gap-10>
            {blogs.map((blog) => (
                <li key={blog.title}>
                    <BlogCard {...blog} />
                </li>
            ))}
        </ul>
    );
};

export default BlogList;
