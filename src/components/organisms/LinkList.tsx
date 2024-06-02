import LinkCard, { type LinkProps } from "components/organisms/LinkCard";

const LinkList = ({ links }: { links?: LinkProps[] }) => {
    return (
        links && (
            <ul aria-label="External links" card w-full mx-auto divide-y>
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
