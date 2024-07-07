import { TOC_END_DEPTH, TOC_START_DEPTH } from "config";
import { useEffect, useState } from "react";

const targetHeadings = Array.from(
    Array(TOC_END_DEPTH - TOC_START_DEPTH + 1).keys(),
)
    .map((i) => `h${(i + TOC_START_DEPTH).toString()}`)
    .join(",");

const useVisibleSection = (): string[] => {
    const [activeSections, setActiveSections] = useState<string[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.map((entry) => {
                const heading =
                    entry.target.querySelector<HTMLHeadingElement>(
                        targetHeadings,
                    );

                if (!heading) {
                    return;
                }

                if (entry.isIntersecting) {
                    setActiveSections(activeSections.concat(heading.id));
                } else {
                    setActiveSections(
                        activeSections.filter((id) => id !== heading.id),
                    );
                }
            });
        });

        document
            .querySelectorAll<HTMLDivElement>("article section")
            .forEach((section) => {
                observer.observe(section);
            });

        return () => {
            observer.disconnect();
        };
    }, []);

    return activeSections;
};

export default useVisibleSection;
