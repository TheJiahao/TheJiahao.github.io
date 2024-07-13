import useSectionState from "hooks/useSectionState";
import type { Heading } from "interfaces/Heading";

interface HeadingListProps {
    heading: Heading;
}

const TableOfContentsHeading = ({ heading }: HeadingListProps) => {
    const visible = useSectionState(heading.slug);

    return (
        <li key={heading.slug} flex="~ col">
            <a
                href={`#${heading.slug}`}
                className={visible ? "text-accent-primary" : undefined}
                text-lg
                p-2
                transition
                hover="bg-surface-tertiary rounded-md"
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
