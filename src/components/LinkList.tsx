import type { LinkProps } from "./Link";
import Link from "./Link";

const LinkList = ({ links }: { links: LinkProps[] }) => {
    return (
        links && (
            <div className="card" un-w="full" un-mx="auto" un-divide="y">
                {links.map((link) => (
                    <Link key={link.url} {...link} />
                ))}
            </div>
        )
    );
};

export default LinkList;
