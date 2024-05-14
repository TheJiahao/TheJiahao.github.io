import type { CollectionEntry } from "astro:content";
import type { ReactNode } from "react";

type postData = CollectionEntry<"posts">["data"];

interface BlogPostProps extends postData {
    children: ReactNode;
}

const BlogPost = ({
    title,
    description,
    date,
    image,
    children,
}: BlogPostProps) => {
    return (
        <>
            <article>{children}</article>
        </>
    );
};

export default BlogPost;
