import { getCollection } from "astro:content";
import type { BlogData } from "interfaces/BlogData";
import type { BlogEntry, RawBlogEntry } from "interfaces/BlogEntry";
import { getAlternates } from "utils/getAlternates";
import { getLastModified } from "./getLastModified";

const rawBlogs: RawBlogEntry[] = (
    await getCollection(
        "posts",
        ({ data }) => import.meta.env.MODE === "development" || !data.draft,
    )
).map((blog) => {
    const [language, ...slug] = blog.slug.split("/");

    return {
        ...blog,
        slug: slug.join("/"),
        data: {
            ...blog.data,
            language,
            lastModified: getLastModified(blog),
        },
    };
});

const blogAlternates = getAlternates(rawBlogs);

const blogs: BlogEntry[] = rawBlogs.map((blog) => ({
    ...blog,
    data: {
        ...blog.data,
        alternates: blogAlternates.get(blog.slug) || [],
    },
}));

/**
 * Preprocesses blogs.
 *
 * @returns List of blog entries.
 */
const getBlogs = (): BlogEntry[] => blogs;

export type { BlogData, BlogEntry };
export default getBlogs;
