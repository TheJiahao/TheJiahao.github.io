import type { CollectionEntry } from "astro:content";

type RawBlogData = CollectionEntry<"posts">["data"] & {
    language: string;
    lastModified: Date;
};

type BlogData = RawBlogData & {
    alternates: string[];
};

export type { BlogData, RawBlogData };
