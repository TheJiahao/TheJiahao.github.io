import type { ImageMetadata } from "astro";
import CoverImage from "components/atoms/CoverImage";
import DateComponent from "components/atoms/DateComponent";
import Details, { type DetailsProps } from "components/molecules/Details";
import { getViewTransitionName } from "utils/getViewTransitionName";

interface ImageCardProps extends DetailsProps {
    url: string;
    image?: ImageMetadata;
    date?: Date;
}

const ImageCard = ({ title, url, image, date, ...props }: ImageCardProps) => (
    <article
        title={title}
        style={{ viewTransitionName: getViewTransitionName(url) }}
        card
        clickable
    >
        <a href={url} rel="bookmark">
            <CoverImage image={image} alt="" />
            <div p-4 lg:p-8 flex="~ col" gap-4>
                <Details title={title} {...props} />

                {date && <DateComponent date={date} />}
            </div>
        </a>
    </article>
);

export type { ImageCardProps };
export default ImageCard;
