import type { LinkProps } from "./LinkCard";
import LinkCard from "./LinkCard";

const LinkList = ({ links }: { links: LinkProps[] }) => {
    return (
        links && (
            <div className="card" un-w="full" un-mx="auto" un-divide="y">
                {links.map((link) => (
                    <LinkCard key={link.url} {...link} />
                ))}
            </div>
        )
    );
};

export default LinkList;
