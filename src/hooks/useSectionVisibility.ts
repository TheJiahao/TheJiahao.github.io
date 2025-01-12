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

        setHeadings(
            sections.map(getHeading).filter((heading) => heading !== null),
        );

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(({ target, isIntersecting }) => {
                const heading = getHeading(target);

                if (!heading) {
                    return;
                }

                if (!isIntersecting) {
                    setVisible((current) =>
                        current.difference(new Set([heading.id])),
                    );
                    return;
                }

                setVisible((current) => current.union(new Set([heading.id])));
            });
        });

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return id === getCurrentHeading(headings, visible);
};

export default useSectionVisibility;
