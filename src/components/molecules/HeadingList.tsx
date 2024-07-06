import type { Heading } from "interfaces/Heading";

interface HeadingListProps {
    heading: Heading;
}

export const HeadingList = ({ heading }: HeadingListProps) => (
    <>
        <a href={`#${heading.slug}`}>{heading.text}</a>

        {heading.subHeadings.length !== 0 ? (
            <ul>
                {heading.subHeadings.map((heading) => (
                    <li key={heading.slug}>
                        <HeadingList heading={heading} />
                    </li>
                ))}
            </ul>
        ) : null}
    </>
);
