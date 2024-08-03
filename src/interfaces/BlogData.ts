import type { CollectionEntry } from "astro:content";

type BlogData = CollectionEntry<"posts">["data"] & {
    language: string;
    lastModified: Date;
};

export { type BlogData };
