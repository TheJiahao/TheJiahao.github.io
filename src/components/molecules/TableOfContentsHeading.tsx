import useSectionVisibility from "hooks/useSectionVisibility";
import type { Heading } from "interfaces/Heading";

interface HeadingListProps {
    heading: Heading;
}

const TableOfContentsHeading = ({ heading }: HeadingListProps) => {
    const visible = useSectionVisibility(heading.slug);

    return (
        <li key={heading.slug} flex="~ col">
            <a
                href={`#${heading.slug}`}
                className={visible ? "highlighted" : undefined}
                text-lg
                p-2
                rounded-md
                clickable
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
