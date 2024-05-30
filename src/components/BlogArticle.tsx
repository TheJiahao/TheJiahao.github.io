import type { ImageMetadata } from "astro";
import type { PropsWithChildren } from "react";
import { BLOG_IMAGE_PLACEHOLDER } from "../config";
import BlogDetails from "./BlogDetails";
import BlogFooter from "./BlogFooter";
import CoverImage from "./CoverImage";

interface BlogArticleProps {
    title: string;
    description?: string;
    date: Date;
    lastModified: Date;
    image?: ImageMetadata;
}

const BlogArticle = ({
    title,
    description,
    date,
    lastModified,
    image = BLOG_IMAGE_PLACEHOLDER,
    children,
}: PropsWithChildren<BlogArticleProps>) => (
    <article prose min-w-40ch max-w-full card>
        <header>
            <CoverImage image={image} title={title} />
            <BlogDetails title={title} description={description} date={date} />
        </header>
        <div px-8 py-2>
            {children}
            <BlogFooter lastModified={lastModified} px-8 py-2 />
        </div>
    </article>
);

export default BlogArticle;
