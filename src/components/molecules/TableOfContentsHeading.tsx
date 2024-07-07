import useVisibleSection from "hooks/useVisibleSection";
import type { Heading } from "interfaces/Heading";

interface HeadingListProps {
    heading: Heading;
}

const TableOfContentsHeading = ({ heading }: HeadingListProps) => {
    const activeSections = useVisibleSection();

    return (
        <li key={heading.slug}>
            <a
                href={`#${heading.slug}`}
                className={
                    activeSections.includes(heading.slug)
                        ? "text-blue"
                        : undefined
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
