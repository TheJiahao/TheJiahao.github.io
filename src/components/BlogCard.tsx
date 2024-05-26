import type { ImageMetadata } from "astro";
import { BLOG_IMAGE_PLACEHOLDER } from "../config";
import formatDate from "../utils/formatDate";

interface BlogProps {
    title: string;
    description: string;
    date: Date;
    url: string;
    image?: ImageMetadata;
}

const BlogCard = ({
    title,
    description,
    date,
    url,
    image = BLOG_IMAGE_PLACEHOLDER,
}: BlogProps) => {
    return (
        <article card>
            <a href={url} rel="bookmark">
                <img
                    src={image.src}
                    alt={`Cover of "${title}"`}
                    className="[&[src$='svg']]:object-fill"
                    object-cover
                    w-full
                    max-h-30vh
                />
                <div prose p-8 max-w-full>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <footer>
                        <time>{formatDate(date)}</time>
                    </footer>
                </div>
            </a>
        </article>
    );
};

export type { BlogProps };
export default BlogCard;
