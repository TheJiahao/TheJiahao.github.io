import { TOC_END_DEPTH, TOC_START_DEPTH } from "config";
import type { SectionHeading } from "interfaces/SectionHeading";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { getCurrentHeading } from "utils/getCurrentHeading";

const getHeadingDepth = (heading: HTMLHeadingElement): number => {
    return Number(heading.tagName.replace(/h/i, ""));
};

const getHeading = (section: Element): SectionHeading | null => {
    const headingDepths = TOC_END_DEPTH - TOC_START_DEPTH + 1;
    const targetHeadings = [...Array(headingDepths).keys()]
        .map((i) => i + TOC_START_DEPTH)
        .map((i) => `h${i.toString()}`)
        .join(",");

    const heading = section.querySelector<HTMLHeadingElement>(targetHeadings);

    if (!heading) {
        return null;
    }

    return { id: heading.id, depth: getHeadingDepth(heading) };
};

const updateVisibility =
    (
        setVisible: Dispatch<SetStateAction<Set<string>>>,
    ): IntersectionObserverCallback =>
    (entries) => {
        for (const { target, isIntersecting } of entries) {
            const heading = getHeading(target) as SectionHeading;

            if (!isIntersecting) {
                setVisible((current) =>
                    current.difference(new Set([heading.id])),
                );
                continue;
            }

            setVisible((current) => current.union(new Set([heading.id])));
        }
    };

/**
 * Checks if the section is visible.
 *
 * @param id id of the section
 * @returns {boolean} Whether the section is visible
 */
const useSectionVisibility = (id: string): boolean => {
    const [visible, setVisible] = useState<Set<string>>(new Set());
    const [headings, setHeadings] = useState<SectionHeading[]>([]);

    useEffect(() => {
        const sections = Array.from(
            document.querySelectorAll("article section:not(.footnotes)"),
        ).filter((section) => getHeading(section));
        const observer = new IntersectionObserver(updateVisibility(setVisible));

        setHeadings(sections.map(getHeading) as SectionHeading[]);

        for (const section of sections) {
            observer.observe(section);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return id === getCurrentHeading(headings, visible);
};

export type { SectionHeading };
export default useSectionVisibility;
