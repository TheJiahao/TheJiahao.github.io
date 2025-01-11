const getHeadingDepth = (heading: HTMLHeadingElement): number => {
    return Number(heading.tagName.replace(/h/i, ""));
};

/**
 * Determines the current heading.
 *
 * @param headings All headings
 * @param visibleHeadings Currently visible headings
 * @returns Current heading
 */
export const getCurrentHeading = (
    headings: HTMLHeadingElement[],
    visibleHeadings: Set<string>,
): string | undefined => {
    let current = null;

    for (const heading of headings) {
        if (!visibleHeadings.has(heading.id)) {
            continue;
        }

        if (!current) {
            current = heading;
            continue;
        }

        if (getHeadingDepth(heading) <= getHeadingDepth(current)) {
            break;
        }

        current = heading;
    }

    return current?.id;
};
