import { type ImageMetadata } from "astro";
import { BLOG_IMAGE_PLACEHOLDER } from "config";

interface CoverImageProps {
    image?: ImageMetadata;
    title: string;
}

const CoverImage = ({
    image = BLOG_IMAGE_PLACEHOLDER,
    title,
}: CoverImageProps) => (
    <img
        src={image.src}
        alt={`Cover image of "${title}"`}
        className="[&[src$='svg']]:object-fill"
        w-full
        h-sm
        max-h-xs
        object-cover
        overflow-hidden
    />
);

export default CoverImage;
