import type { CollectionEntry } from "astro:content";
import type { BlogData, RawBlogData } from "interfaces/BlogData";

type RawBlogEntry = CollectionEntry<"posts"> & {
    /** Blog slug without language */
    slug: string;
    data: RawBlogData;
};

type BlogEntry = RawBlogEntry & {
    data: BlogData;
};

export type { BlogEntry, RawBlogEntry };
