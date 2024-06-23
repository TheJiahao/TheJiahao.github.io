import type { ImageMetadata } from "astro";
import CoverImage from "components/atoms/CoverImage";
import BlogDetails from "components/molecules/BlogDetails";

interface BlogCardProps {
    title: string;
    description?: string;
    date: Date;
    url: string;
    image?: ImageMetadata;
}

const BlogCard = ({ title, description, date, url, image }: BlogCardProps) => {
    return (
        <article title={title} card>
            <a href={url} rel="bookmark">
                <CoverImage image={image} title={title} />
                <BlogDetails
                    title={title}
                    description={description}
                    date={date}
                />
            </a>
        </article>
    );
};

export type { BlogCardProps };
export default BlogCard;
