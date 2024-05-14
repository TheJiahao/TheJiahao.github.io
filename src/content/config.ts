import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            date: z.date(),
            tags: z.array(z.string()),
            description: z.string().optional(),
            image: image(),
        }),
});

export const collections = { posts: postCollection };
