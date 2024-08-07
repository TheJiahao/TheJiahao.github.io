import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            date: z.date(),
            license: z.string().optional(),
            tags: z.array(z.string()).optional(),
            description: z.string().optional(),
            image: image().optional(),
            links: z
                .array(
                    z.object({
                        title: z.string(),
                        description: z.string().optional(),
                        url: z.string(),
                        image: z.union([image(), z.string()]).optional(),
                    }),
                )
                .optional(),
            draft: z.boolean().optional(),
            math: z.boolean().optional(),
        }),
});

const projectCollection = defineCollection({
    type: "data",
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            url: z.string(),
            description: z.record(z.string(), z.string()),
            image: image().optional(),
        }),
});

export const collections = {
    posts: postCollection,
    projects: projectCollection,
};
