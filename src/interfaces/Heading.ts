import type { MarkdownHeading } from "astro";

/**
 * Heading with its sub-headings.
 */
export interface Heading extends MarkdownHeading {
    subHeadings: Heading[];
}
