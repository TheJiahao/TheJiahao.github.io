import type { LinkProps } from "./Link";
import Link from "./Link";
import "../styles/card.css";

const LinkList = ({ links }: { links?: LinkProps[] }) => {
    if (!links) {
        return null;
    }

    return (
        <div className="card" un-w="full" un-mx="auto" un-divide="y">
            {links.map((link) => (
                <Link key={link.url} {...link} />
            ))}
        </div>
    );
};

export default LinkList;
