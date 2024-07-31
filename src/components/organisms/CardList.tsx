import ImageCard, { type ImageCardProps } from "components/molecules/ImageCard";
import type { AriaAttributes } from "react";

interface CardListProps extends AriaAttributes {
    cards: ImageCardProps[];
}

const CardList = ({ cards, ...props }: CardListProps) => (
    <ul flex="~ col" gap-10 {...props}>
        {cards.map((blog) => (
            <li key={blog.title}>
                <ImageCard {...blog} />
            </li>
        ))}
    </ul>
);

export default CardList;
