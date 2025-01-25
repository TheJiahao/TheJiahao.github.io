import { type ImageMetadata } from "astro";
import { BLOG_IMAGE_PLACEHOLDER } from "config";
import type { AnimatedElement } from "interfaces/AnimatedElement";

interface CoverImageProps extends AnimatedElement {
    image?: ImageMetadata;
    alt: string;
}

const CoverImage = ({
    image = BLOG_IMAGE_PLACEHOLDER,
    alt,
    viewTransitionName,
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
        style={{ viewTransitionName }}
    />
);

export default CoverImage;
