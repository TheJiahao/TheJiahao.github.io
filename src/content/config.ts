import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        date: z.date(),
        tags: z.array(z.string()),
        description: z.string().optional(),
        cover: z.string().optional(),
    }),
});

export const collections = { posts: postCollection };
