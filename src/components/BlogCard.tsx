import type { CollectionEntry } from "astro:content";
import "../styles/card.css";
import formatDate from "../utils/formatDate";

const width = 200;
const height = width / 1.618;
const detailsHeight = (1 / 2.618) * height;
const imageHeight = height - detailsHeight;

const BlogCard = ({
    title,
    description,
    date,
    image = {
        src: "/src/assets/images/cover_placeholder.svg",
        width,
        height,
        format: "svg",
    },
}: CollectionEntry<"posts">["data"]) => {
    return (
        <div className="card" un-w="sm" un-aspect-ratio="1.618">
            <img
                src={image.src}
                alt={`Cover image of "${title}"`}
                className="[&[src$='svg']]:object-fill"
                un-object="cover"
                un-h={(1.618 / 2.618) * height}
                un-w="full"
            />
            <div un-h={(1 / 2.618) * height}>
                <h2>{title}</h2>
                <p>{description}</p>
                <time>{formatDate(date)}</time>
            </div>
        </div>
    );
};

export default BlogCard;
