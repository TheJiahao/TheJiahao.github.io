import type { CollectionEntry } from "astro:content";
import type { ReactNode } from "react";
import "../styles/card.css";

type postData = CollectionEntry<"posts">["data"];

interface BlogProps extends postData {
    children: ReactNode;
}

const BlogPost = ({ title, description, date, image, children }: BlogProps) => {
    return (
        <article
            className="card prose"
            un-container="sm"
            un-max-w="prose"
            un-mx="auto"
        >
            <header>
                {image && (
                    <img
                        src={image.src}
                        alt={`Cover image of "${title}"`}
                        className="[&[src$='svg']]:object-fill"
                        un-w="full"
                        un-max-w="full"
                        un-max-h="30vh"
                        un-object="cover"
                        un-overflow="hidden"
                    />
                )}
                <div un-px="8" un-py="2">
                    <h2>{title}</h2>
                    <h3 un-text="slate">{description}</h3>
                    <time>{date.toISOString().split("T")[0]}</time>
                </div>
            </header>
            <section un-px="8" un-py="2">
                {children}
            </section>
        </article>
    );
};

export default BlogPost;
