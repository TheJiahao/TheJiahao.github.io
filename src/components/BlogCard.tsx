import type { CollectionEntry } from "astro:content";
import "../styles/card.css";
import formatDate from "../utils/formatDate";
import { BLOG_IMAGE_HEIGHT, BLOG_IMAGE_PLACEHOLDER } from "../config";

type BlogProps = CollectionEntry<"posts">["data"] & { slug: string };

const detailsHeight = (1 / 2.618) * BLOG_IMAGE_HEIGHT;

const BlogCard = ({
    title,
    description,
    date,
    slug,
    image = BLOG_IMAGE_PLACEHOLDER,
}: BlogProps) => {
    return (
        <a
            className="card flex"
            href={`/posts/${slug}`}
            un-w="90ch"
            un-mx="auto"
        >
            <img
                src={image.src}
                alt={`Cover of "${title}"`}
                className="[&[src$='svg']]:object-fill"
                un-object="cover"
                un-w="full"
                un-max-h="30vh"
            />

            <div
                className="prose block"
                un-h={detailsHeight}
                un-p="8"
                un-max-w="full"
            >
                <h2>{title}</h2>
                <p>{description}</p>
                <time>{formatDate(date)}</time>
            </div>
        </a>
    );
};

export type { BlogProps };
export default BlogCard;
