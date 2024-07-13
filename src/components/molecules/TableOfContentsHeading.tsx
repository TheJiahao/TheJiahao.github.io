import useVisibleSection from "hooks/useVisibleSection";
import type { Heading } from "interfaces/Heading";

interface HeadingListProps {
    heading: Heading;
}

const TableOfContentsHeading = ({ heading }: HeadingListProps) => {
    const id = useVisibleSection();

    return (
        <li key={heading.slug}>
            <a
                href={`#${heading.slug}`}
                className={
                    heading.slug === id ? "text-accent-primary" : undefined
                }
            >
                {heading.text}
            </a>

            {heading.subHeadings.length > 0 ? (
                <ul pl-10>
                    {heading.subHeadings.map((heading) => (
                        <TableOfContentsHeading
                            key={heading.slug}
                            heading={heading}
                        />
                    ))}
                </ul>
            ) : null}
        </li>
    );
};

export default TableOfContentsHeading;
