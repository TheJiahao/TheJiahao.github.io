import type { CollectionEntry } from "astro:content";
import type { AlternateLink } from "interfaces/AlternateLink";

type RawBlogData = CollectionEntry<"posts">["data"] & {
    language: string;
    lastModified: Date;
};

type BlogData = RawBlogData & {
    alternates: AlternateLink[];
};

export type { BlogData, RawBlogData };
