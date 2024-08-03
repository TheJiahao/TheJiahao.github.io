import type { CollectionEntry } from "astro:content";
import type { BlogData } from "interfaces/BlogData";

export type BlogEntry = Omit<CollectionEntry<"posts">, "slug"> & {
    /** Blog slug without language */
    slug: string;
    data: BlogData;
};
