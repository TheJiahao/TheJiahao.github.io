import { getCollection, type CollectionEntry } from "astro:content";
import { execSync } from "child_process";
import type { BlogData } from "interfaces/BlogData";
import type { BlogEntry, RawBlogEntry } from "interfaces/BlogEntry";
import { getAlternates } from "utils/getAlternates";

const getLastModified = ({
    collection,
    id,
}: CollectionEntry<"posts">): Date => {
    const filePath = `src/content/${collection}/${id}`;
    const result = execSync(`git log -1 --pretty="format:%cI" "${filePath}"`);

    return new Date(result.toString());
};

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

const getBlogs = (): BlogEntry[] => blogs;

export type { BlogData, BlogEntry };
export default getBlogs;
