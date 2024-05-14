import type { CollectionEntry } from "astro:content";
import type { ReactNode } from "react";

type postData = CollectionEntry<"posts">["data"];

interface BlogProps extends postData {
    children: ReactNode;
}

const BlogPost = ({
    title,
    description,
    date,
    image,
    children,
}: BlogProps) => {
    return (
        <>
            <article>{children}</article>
        </>
    );
};

export default BlogPost;
