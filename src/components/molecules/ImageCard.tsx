import type { ImageMetadata } from "astro";
import CoverImage from "components/atoms/CoverImage";
import DateComponent from "components/atoms/DateComponent";
import Details, { type DetailsProps } from "components/molecules/Details";
import { getUUID } from "utils/getUUID";

interface ImageCardProps extends DetailsProps {
    url: string;
    image?: ImageMetadata;
    date?: Date;
}

const ImageCard = ({ title, url, image, date, ...props }: ImageCardProps) => {
    const id = getUUID(title);

    return (
        <article title={title} card clickable>
            <a href={url} rel="bookmark">
                <CoverImage
                    image={image}
                    alt=""
                    viewTransitionName={`image-${id}`}
                />
                <div p-4 lg:p-8 flex="~ col" gap-4>
                    <Details
                        title={title}
                        viewTransitionName={`title-${id}`}
                        {...props}
                    />

                    {date && (
                        <DateComponent
                            date={date}
                            viewTransitionName={`date-${id}`}
                        />
                    )}
                </div>
            </a>
        </article>
    );
};

export type { ImageCardProps };
export default ImageCard;
