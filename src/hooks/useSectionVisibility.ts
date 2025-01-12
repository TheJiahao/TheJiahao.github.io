import { TOC_END_DEPTH, TOC_START_DEPTH } from "config";
import { useEffect, useState } from "react";
import { getCurrentHeading } from "utils/getCurrentHeading";

const getHeading = (section: Element) => {
    const headingDepths = TOC_END_DEPTH - TOC_START_DEPTH + 1;
    const targetHeadings = [...Array(headingDepths).keys()]
        .map((i) => i + TOC_START_DEPTH)
        .map((i) => `h${i.toString()}`)
        .join(",");

    return section.querySelector<HTMLHeadingElement>(targetHeadings);
};

const getVisible = (
    entries: IntersectionObserverEntry[],
    visible: Set<string>,
): Set<string> => {
    let newVisible = visible;

    for (const { target, isIntersecting } of entries) {
        const heading = getHeading(target);

        if (!heading) {
            continue;
        }

        if (!isIntersecting) {
            newVisible = newVisible.difference(new Set([heading.id]));
        }

        newVisible = newVisible.union(new Set([heading.id]));
    }

    return newVisible;
};

/**
 * Checks if the section is visible.
 *
 * @param id id of the section
 * @returns {boolean} Whether the section is visible
 */
const useSectionVisibility = (id: string): boolean => {
    const [visible, setVisible] = useState<Set<string>>(new Set());
    const [headings, setHeadings] = useState<HTMLHeadingElement[]>([]);

    useEffect(() => {
        const sections = Array.from(
            document.querySelectorAll("article section:not(.footnotes)"),
        );
        const observer = new IntersectionObserver((entries) => {
            setVisible(getVisible(entries, visible));
        });

        setHeadings(
            sections.map(getHeading).filter((heading) => heading !== null),
        );

        for (const section of sections) {
            observer.observe(section);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return id === getCurrentHeading(headings, visible);
};

export default useSectionVisibility;
