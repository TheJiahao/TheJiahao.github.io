import { TOC_END_DEPTH, TOC_START_DEPTH } from "config";
import { useEffect, useState } from "react";

const targetHeadings = Array.from(
    Array(TOC_END_DEPTH - TOC_START_DEPTH + 1).keys(),
)
    .map((i) => `h${(i + TOC_START_DEPTH).toString()}`)
    .join(",");

const useVisibleSection = (): string | undefined => {
    const [visible, setVisible] = useState<Set<string>>(new Set());
    const [headings, setHeadings] = useState<string[]>([]);

    useEffect(() => {
        setHeadings(
            Array.from(
                document.querySelectorAll("article section:not(.footnotes)"),
            )
                .map(
                    (section) =>
                        section.querySelector(targetHeadings)?.id ?? null,
                )
                .filter((id) => id !== null)
                .reverse(),
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
            .querySelectorAll<HTMLDivElement>("article section:not(.footnotes)")
            .forEach((section) => {
                observer.observe(section);
            });

        return () => {
            observer.disconnect();
        };
    }, []);

    return headings.find((heading) => visible.has(heading));
};

export default useVisibleSection;
