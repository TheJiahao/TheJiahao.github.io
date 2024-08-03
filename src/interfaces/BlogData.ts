import type { CollectionEntry } from "astro:content";

type BlogData = CollectionEntry<"posts">["data"] & {
    language: string;
    lastModified: Date;
    alternates?: { language: string; slug: string }[];
};

export { type BlogData };
