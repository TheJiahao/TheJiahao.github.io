import type { CollectionEntry } from "astro:content";
import "../styles/card.css";
import BlogCard from "./BlogCard";

const BlogList = ({ blogs }: { blogs: CollectionEntry<"posts">["data"][] }) => {
    return (
        <div className="flex" un-flex="col">
            {blogs.map((blog) => (
                <BlogCard key={blog.title} {...blog} />
            ))}
        </div>
    );
};

export default BlogList;
