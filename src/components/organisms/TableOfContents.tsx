import { type MarkdownHeading } from "astro";
import { HeadingList } from "components/molecules/HeadingList";
import { getTOC } from "utils/getTOC";

interface TableOfContentsProps {
    headings: MarkdownHeading[];
}

const TableOfContents = ({ headings }: TableOfContentsProps) => {
    return (
        <nav card p-lg bg-surface-primary text-secondary>
            <ul>
                {getTOC(headings).map((heading) => (
                    <li key={heading.slug}>
                        <HeadingList heading={heading} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default TableOfContents;