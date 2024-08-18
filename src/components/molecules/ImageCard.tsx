import type { ImageMetadata } from "astro";
import CoverImage from "components/atoms/CoverImage";
import Details, { type DetailsProps } from "components/molecules/Details";

interface ImageCardProps extends DetailsProps {
    url: string;
    image?: ImageMetadata;
}

const ImageCard = ({ title, url, image, ...props }: ImageCardProps) => {
    return (
        <article title={title} card clickable>
            <a href={url} rel="bookmark">
                <CoverImage image={image} alt="" />
                <div p-4 lg:p-8>
                    <Details title={title} {...props} />
                </div>
            </a>
        </article>
    );
};

export type { ImageCardProps };
export default ImageCard;
