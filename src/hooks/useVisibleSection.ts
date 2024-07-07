import { TOC_END_DEPTH, TOC_START_DEPTH } from "config";
import { useEffect, useState } from "react";

const targetHeadings = Array.from(
    Array(TOC_END_DEPTH - TOC_START_DEPTH + 1).keys(),
)
    .map((i) => `h${(i + TOC_START_DEPTH).toString()}`)
    .join(",");

const useVisibleSection = (): string | null => {
    const [id, setId] = useState<string | null>(null);

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
                    setId(heading.id);
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

    return id;
};

export default useVisibleSection;
