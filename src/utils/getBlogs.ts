import { getCollection, type CollectionEntry } from "astro:content";

type BlogEntry = Omit<CollectionEntry<"posts">, "slug"> & {
    slug: string;
    language: string;
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
        };
    });
};

export type { BlogEntry };
export default getBlogs;
