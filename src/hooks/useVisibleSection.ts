import { useEffect } from "react";

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

                if (!heading) return;

                const id = heading.getAttribute("id");

                if (!id) return;

                const link = document.querySelector<HTMLAnchorElement>(
                    `nav > * a[href="#${id}"]`,
                );

                if (!link) return;

                const addRemove =
                    entry.intersectionRatio > 0 ? "add" : "remove";
                link.classList[addRemove](
                    "text-blue-500",
                    "dark:text-blue-400",
                );
            });
        });

        for (const section of articleSections) {
            observer.observe(section);
        }

        window.document.addEventListener("beforeunload", () => {
            observer.disconnect();
        });
    }, []);
};

export default useVisibleSection;
