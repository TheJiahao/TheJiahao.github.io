import type { MarkdownHeading } from "astro";
import type { Heading } from "interfaces/Heading";

export const getTOC = (
    headings: MarkdownHeading[],
    startDepth: number = 2,
    endDepth: number = 3,
): Heading[] => {
    const result: Heading[] = [];
    const parentHeadings = new Array<Heading | null>(7).fill(null);

    headings
        .filter((h) => h.depth <= endDepth)
        .forEach((h) => {
            const heading = { ...h, subHeadings: [] };
            parentHeadings[heading.depth] = heading;

            if (heading.depth === startDepth) {
                result.push(heading);
                return;
            }

            const parent = parentHeadings[heading.depth - 1];

            if (!parent) {
                throw new Error(
                    `Heading ${h.text} missing parent. Headings should only decrease by one level`,
                );
            }

            parent.subHeadings.push(heading);
        });

    return result;
};
