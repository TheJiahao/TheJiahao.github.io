import type { CollectionEntry } from "astro:content";
import type { ReactNode } from "react";
import "../styles/card.css";

type postData = CollectionEntry<"posts">["data"];

interface BlogProps extends postData {
    children: ReactNode;
}

const BlogPost = ({ title, description, date, children }: BlogProps) => {
    return (
        <article
            className="card prose"
            un-container="sm"
            un-max-w="prose"
            un-mx="auto"
        >
            {children}
        </article>
    );
};

export default BlogPost;
