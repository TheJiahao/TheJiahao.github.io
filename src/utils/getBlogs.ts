import { getCollection } from "astro:content";
import type { BlogEntry, RawBlogEntry } from "interfaces/BlogEntry";
import { getAlternates } from "utils/getAlternates";

const rawBlogs: RawBlogEntry[] = (
    await getCollection(
        "posts",
        ({ data }) => import.meta.env.MODE === "development" || !data.draft,
    )
).map((blog) => {
    const [language, ...slug] = blog.id.split("/");

    if (!blog.filePath) {
        throw Error(`Blog ${blog.id} missing path`);
    }

    return {
        ...blog,
        slug: slug.join("/"),
        data: {
            ...blog.data,
            language,
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
export const getBlogs = (): BlogEntry[] => blogs;
