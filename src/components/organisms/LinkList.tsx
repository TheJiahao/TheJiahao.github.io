import LinkCard, { type LinkProps } from "components/organisms/LinkCard";
import type { AriaAttributes, HTMLAttributes } from "react";

interface LinkListProps
    extends HTMLAttributes<HTMLUListElement>,
        AriaAttributes {
    links?: LinkProps[];
}

const LinkList = ({ links, ...props }: LinkListProps) => {
    return (
        links && (
            <ul w-full mx-auto divide-y {...props}>
                {links.map((link) => (
                    <li key={link.url}>
                        <LinkCard {...link} />
                    </li>
                ))}
            </ul>
        )
    );
};

export default LinkList;
