import { getCollection, type CollectionEntry } from "astro:content";
import { execSync } from "child_process";

type BlogData = CollectionEntry<"posts">["data"] & {
    language: string;
    lastModified: Date;
};

type BlogEntry = Omit<CollectionEntry<"posts">, "slug"> & {
    slug: string;
    data: BlogData;
};

const getLastModified = ({
    collection,
    id,
}: CollectionEntry<"posts">): Date => {
    const filePath = `src/content/${collection}/${id}`;
    const result = execSync(`git log -1 --pretty="format:%cI" "${filePath}"`);

    return new Date(result.toString());
};

const blogs = (
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

const getBlogs = (): BlogEntry[] => blogs;

export type { BlogData, BlogEntry };
export default getBlogs;
