import ImageCard, { type ImageCardProps } from "components/molecules/ImageCard";
import type { AriaAttributes } from "react";

interface CardListProps extends AriaAttributes {
    blogs: ImageCardProps[];
}

const CardList = ({ blogs, ...props }: CardListProps) => {
    return (
        <ul flex="~ col" gap-10 {...props}>
            {blogs.map((blog) => (
                <li key={blog.title}>
                    <ImageCard {...blog} />
                </li>
            ))}
        </ul>
    );
};

export default CardList;
