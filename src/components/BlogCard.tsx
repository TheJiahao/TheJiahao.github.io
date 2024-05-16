import type { CollectionEntry } from "astro:content";
import "../styles/card.css";
import formatDate from "../utils/formatDate";

type BlogProps = CollectionEntry<"posts">["data"] & { slug: string };

const width = 200;
const height = width / 1.618;
const detailsHeight = (1 / 2.618) * height;

const BlogCard = ({
    title,
    description,
    date,
    slug,
    image = {
        src: "/src/assets/images/cover_placeholder.svg",
        width,
        height,
        format: "svg",
    },
}: BlogProps) => {
    return (
        <a className="card flex" href={`/posts/${slug}`} un-w="90ch" un-mx="auto">
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
