import { useEffect, useState } from "react";

const useVisibleSection = (): string[] => {
    const [activeSections, setActiveSections] = useState<string[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.map((entry) => {
                const heading =
                    entry.target.querySelector<HTMLHeadingElement>(
                        "h2,h3,h4,h5,h6",
                    );

                if (!heading) {
                    return;
                }

                if (entry.intersectionRatio > 0) {
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
