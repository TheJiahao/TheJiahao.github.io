import ImageCard, { type ImageCardProps } from "components/molecules/ImageCard";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { getTranslation } from "utils/getTranslation";

interface CardListProps extends TranslatedElement {
    blogs: ImageCardProps[];
}

const CardList = ({ blogs, language }: CardListProps) => {
    return (
        <ul aria-label={getTranslation(language).blogList} flex="~ col" gap-10>
            {blogs.map((blog) => (
                <li key={blog.title}>
                    <ImageCard {...blog} />
                </li>
            ))}
        </ul>
    );
};

export default CardList;
