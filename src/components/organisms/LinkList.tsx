import LinkCard, { type LinkProps } from "components/organisms/LinkCard";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import type { HTMLAttributes } from "react";
import { getTranslation } from "utils/getTranslation";

interface LinkListProps
    extends TranslatedElement,
        HTMLAttributes<HTMLUListElement> {
    links?: LinkProps[];
}

const LinkList = ({ links, language, ...props }: LinkListProps) => {
    return (
        links && (
            <ul
                aria-label={getTranslation(language).externalLinks}
                w-full
                mx-auto
                divide-y
                {...props}
            >
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
