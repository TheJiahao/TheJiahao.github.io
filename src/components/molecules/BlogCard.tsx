import type { ImageMetadata } from "astro";
import CoverImage from "components/atoms/CoverImage";
import BlogDetails, {
    type BlogDetailsProps,
} from "components/molecules/BlogDetails";

interface BlogCardProps extends BlogDetailsProps {
    url: string;
    image?: ImageMetadata;
}

const BlogCard = ({ title, url, image, ...props }: BlogCardProps) => {
    return (
        <article title={title} card clickable>
            <a href={url} rel="bookmark">
                <CoverImage image={image} title={title} />
                <div p-4 lg:p-8>
                    <BlogDetails title={title} {...props} />
                </div>
            </a>
        </article>
    );
};

export type { BlogCardProps };
export default BlogCard;
