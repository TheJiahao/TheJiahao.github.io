import { getCollection, type CollectionEntry } from "astro:content";
import { execSync } from "child_process";

type BlogEntry = Omit<CollectionEntry<"posts">, "slug"> & {
    slug: string;
    language: string;
    lastModified: Date;
};

const getLastModified = ({
    collection,
    id,
}: CollectionEntry<"posts">): Date => {
    const filePath = `src/content/${collection}/${id}`;
    const result = execSync(`git log -1 --pretty="format:%cI" "${filePath}"`);

    return new Date(result.toString());
};

const getBlogs = async (): Promise<BlogEntry[]> => {
    const blogs = await getCollection(
        "posts",
        ({ data }) => import.meta.env.MODE === "development" || !data.draft,
    );

    return blogs.map((blog) => {
        const [language, ...slug] = blog.slug.split("/");

        return {
            ...blog,
            slug: slug.join("/"),
            language,
            lastModified: getLastModified(blog),
        };
    });
};

export type { BlogEntry };
export default getBlogs;
