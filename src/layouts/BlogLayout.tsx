import type { CollectionEntry } from "astro:content";
import type { ReactNode } from "react";
import formatDate from "../utils/formatDate";

type postData = CollectionEntry<"posts">["data"];

interface BlogProps extends postData {
    children: ReactNode;
}

const BlogLayout = ({ title, description, date, image, children }: BlogProps) => {
    return (
        <article className="card" un-container="sm">
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
                    <time>{formatDate(date)}</time>
                </div>
            </header>
            <section un-px="8" un-py="2">
                {children}
            </section>
        </article>
    );
};

export default BlogLayout;
