import { getCollection, type CollectionEntry } from "astro:content";

const getBlogs = async (): Promise<CollectionEntry<"posts">[]> => {
    return await getCollection(
        "posts",
        ({ data }) => import.meta.env.MODE === "development" || !data.draft,
    );
};

export default getBlogs;
