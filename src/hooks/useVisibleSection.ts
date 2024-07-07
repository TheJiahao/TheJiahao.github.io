import { useEffect, useState } from "react";

const useVisibleSection = (): string | null => {
    const [id, setId] = useState<string | null>(null);

const useVisibleSection = () => {
    useEffect(() => {
        const articleSections =
            document.querySelectorAll<HTMLDivElement>("article section");

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

        for (const section of articleSections) {
            observer.observe(section);
        }

        window.document.addEventListener("beforeunload", () => {
            observer.disconnect();
        });
    }, []);

    return id;
};

export default useVisibleSection;
