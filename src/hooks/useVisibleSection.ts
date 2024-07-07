import { useEffect, useState } from "react";

const useVisibleSection = (): string | null => {
    const [id, setId] = useState<string | null>(null);

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
                    setId(heading.getAttribute("id"));
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
