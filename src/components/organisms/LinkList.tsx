import LinkCard, { type LinkProps } from "components/organisms/LinkCard";
import { DEFAULT_LANGUAGE } from "config";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { getTranslation } from "utils/getTranslation";

interface LinkListProps extends TranslatedElement {
    links?: LinkProps[];
}

const LinkList = ({ links, language = DEFAULT_LANGUAGE }: LinkListProps) => {
    return (
        links && (
            <ul
                aria-label={getTranslation(language).externalLinks}
                card
                w-full
                mx-auto
                divide-y
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
