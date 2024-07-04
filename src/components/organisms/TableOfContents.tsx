import { type MarkdownHeading } from "astro";

interface TableOfContentsProps {
    headings: MarkdownHeading[];
}

const TableOfContents = ({ headings }: TableOfContentsProps) => {
    return (
        <nav card p-lg bg-surface-primary text-secondary>
            <ul>
                {headings.map((heading) => (
                    <li key={heading.slug}>
                        <a href={`#${heading.slug}`}>{heading.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default TableOfContents;
