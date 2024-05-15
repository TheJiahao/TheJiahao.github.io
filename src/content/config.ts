import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            date: z.date(),
            tags: z.array(z.string()).optional(),
            description: z.string().optional(),
            image: image().optional(),
            links: z
                .array(
                    z.object({
                        title: z.string(),
                        description: z.string().optional(),
                        url: z.string(),
                        image: z.string().optional(),
                    }),
                )
                .optional(),
        }),
});

export const collections = { posts: postCollection };
