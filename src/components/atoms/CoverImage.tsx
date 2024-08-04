import { type ImageMetadata } from "astro";
import { BLOG_IMAGE_PLACEHOLDER } from "config";

interface CoverImageProps {
    image?: ImageMetadata;
    alt: string;
}

const CoverImage = ({
    image = BLOG_IMAGE_PLACEHOLDER,
    alt,
}: CoverImageProps) => (
    <img
        src={image.src}
        width={image.width}
        height={image.height}
        alt={alt}
        className="[&[src$='svg']]:object-fill"
        w-full
        max-h-xs
        object-cover
        overflow-hidden
    />
);

export default CoverImage;
