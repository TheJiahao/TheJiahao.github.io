import LinkCard, { type LinkProps } from "components/molecules/LinkCard";
import type { AriaAttributes, HTMLAttributes } from "react";

interface LinkListProps
    extends HTMLAttributes<HTMLUListElement>,
        AriaAttributes {
    links: LinkProps[];
}

const LinkList = ({ links, ...props }: LinkListProps) => (
    <ul w-full divide-y {...props}>
        {links.map((link) => (
            <li key={link.url}>
                <LinkCard {...link} />
            </li>
        ))}
    </ul>
);

export default LinkList;
