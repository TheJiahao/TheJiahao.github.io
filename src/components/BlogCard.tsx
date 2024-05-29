import type { ImageMetadata } from "astro";
import { BLOG_IMAGE_PLACEHOLDER } from "../config";
import formatDate from "../utils/formatDate";
import CoverImage from "./CoverImage";

interface BlogCardProps {
    title: string;
    description?: string;
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
}: BlogCardProps) => {
    return (
        <article card>
            <a href={url} rel="bookmark">
                <CoverImage image={image} title={title} />
                <div prose p-8 max-w-full>
                    <h2>{title}</h2>
                    {description && <p>{description}</p>}
                    <footer>
                        <time>{formatDate(date)}</time>
                    </footer>
                </div>
            </a>
        </article>
    );
};

export type { BlogCardProps };
export default BlogCard;
