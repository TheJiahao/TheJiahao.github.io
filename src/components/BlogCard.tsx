import type { CollectionEntry } from "astro:content";
import { BLOG_IMAGE_PLACEHOLDER } from "../config";
import formatDate from "../utils/formatDate";

type BlogProps = CollectionEntry<"posts">["data"] & { slug: string };

const BlogCard = ({
    title,
    description,
    date,
    slug,
    image = BLOG_IMAGE_PLACEHOLDER,
}: BlogProps) => {
    return (
        <article card>
            <a href={`/posts/${slug}`} rel="bookmark">
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
