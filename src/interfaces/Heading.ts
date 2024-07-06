import type { MarkdownHeading } from "astro";

export interface Heading extends MarkdownHeading {
    subHeadings: Heading[];
}
