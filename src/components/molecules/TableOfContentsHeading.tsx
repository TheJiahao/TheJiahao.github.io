import type { Heading } from "interfaces/Heading";
import { useEffect } from "react";

interface HeadingListProps {
    heading: Heading;
}

const TableOfContentsHeading = ({ heading }: HeadingListProps) => {
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

    return (
        <li key={heading.slug}>
            <a href={`#${heading.slug}`}>{heading.text}</a>

            {heading.subHeadings.length > 0 ? (
                <ul pl-10>
                    {heading.subHeadings.map((heading) => (
                        <TableOfContentsHeading
                            key={heading.slug}
                            heading={heading}
                        />
                    ))}
                </ul>
            ) : null}
        </li>
    );
};

export default TableOfContentsHeading;
