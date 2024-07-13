import { TOC_END_DEPTH, TOC_START_DEPTH } from "config";
import { useEffect, useState } from "react";

const targetHeadings = Array.from(
    Array(TOC_END_DEPTH - TOC_START_DEPTH + 1).keys(),
)
    .map((i) => `h${(i + TOC_START_DEPTH).toString()}`)
    .join(",");

const getHeadingDepth = (heading: HTMLHeadingElement): number => {
    return Number(heading.tagName.replace(/h/i, ""));
};

const getCurrentHeading = (
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

const useVisibleSection = (): string | undefined => {
    const [visible, setVisible] = useState<Set<string>>(new Set());
    const [headings, setHeadings] = useState<HTMLHeadingElement[]>([]);

    useEffect(() => {
        setHeadings(
            Array.from(
                document.querySelectorAll("article section:not(.footnotes)"),
            )
                .map((section) =>
                    section.querySelector<HTMLHeadingElement>(targetHeadings),
                )
                .filter((heading) => heading !== null),
        );

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(({ target, isIntersecting }) => {
                const heading =
                    target.querySelector<HTMLHeadingElement>(targetHeadings);

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

        document
            .querySelectorAll("article section:not(.footnotes)")
            .forEach((section) => {
                observer.observe(section);
            });

        return () => {
            observer.disconnect();
        };
    }, []);

    return getCurrentHeading(headings, visible);
};

export default useVisibleSection;
