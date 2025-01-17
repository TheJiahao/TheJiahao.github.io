import type { SectionHeading } from "interfaces/SectionHeading";

/**
 * Determines the current heading.
 *
 * @param headings All headings
 * @param visibleHeadings Currently visible headings
 * @returns Current heading
 */
export const getCurrentHeading = (
    headings: SectionHeading[],
    visibleHeadings: Set<string>,
) => {
    let current = null;

    for (const heading of headings) {
        if (!visibleHeadings.has(heading.id)) {
            continue;
        }

        if (!current) {
            current = heading;
            continue;
        }

        if (heading.depth <= current.depth) {
            break;
        }

        current = heading;
    }

    return current?.id ?? null;
};
