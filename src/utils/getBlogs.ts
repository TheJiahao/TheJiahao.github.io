import { getCollection } from "astro:content";

const getBlogs = async () => {
    return await getCollection(
        "posts",
        ({ data }) => import.meta.env.MODE === "development" || !data.draft,
    );
};

export default getBlogs;
