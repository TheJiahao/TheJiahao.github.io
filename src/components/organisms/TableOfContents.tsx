import { type MarkdownHeading } from "astro";
import TableOfContentsHeading from "components/molecules/TableOfContentsHeading";
import { getTOC } from "utils/getTOC";

interface TableOfContentsProps {
    headings: MarkdownHeading[];
}

const TableOfContents = ({ headings }: TableOfContentsProps) => {
    return (
        <nav card max-w-30ch p-lg bg-surface-primary text-secondary>
            <ul>
                {getTOC(headings).map((heading) => (
                    <TableOfContentsHeading
                        key={heading.slug}
                        heading={heading}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default TableOfContents;
