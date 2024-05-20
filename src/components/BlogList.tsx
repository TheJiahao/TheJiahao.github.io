import BlogCard, { type BlogProps } from "./BlogCard";

const BlogList = ({ blogs }: { blogs: BlogProps[] }) => {
    return (
        <ul aria-label="List of blogs" flex="~ col" gap="10">
            {blogs.map((blog) => (
                <li key={blog.title} aria-label="Blog">
                    <BlogCard {...blog} />
                </li>
            ))}
        </ul>
    );
};

export default BlogList;
