import BlogCard, { type BlogProps } from "./BlogCard";

const BlogList = ({ blogs }: { blogs: BlogProps[] }) => {
    return (
        <div className="flex" un-flex="col" un-gap="10">
            {blogs.map((blog) => (
                <BlogCard key={blog.title} {...blog} />
            ))}
        </div>
    );
};

export default BlogList;
