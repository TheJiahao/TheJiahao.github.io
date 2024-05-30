import { type ImageMetadata } from "astro";

interface CoverImageProps {
    image: ImageMetadata;
    title: string;
}

const CoverImage = ({ image, title }: CoverImageProps) => (
    <img
        src={image.src}
        alt={`Cover image of "${title}"`}
        className="[&[src$='svg']]:object-fill"
        w-full
        max-h-xs
        object-cover
        overflow-hidden
    />
);

export default CoverImage;
