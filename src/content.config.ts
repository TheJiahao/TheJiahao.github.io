import { glob } from "astro/loaders";
import { defineCollection, z, type SchemaContext } from "astro:content";

const baseSchema = ({ image }: SchemaContext) =>
    z.object({
        title: z.string(),
        description: z.string().optional(),
        image: image().optional(),
    });

const postCollection = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "content/posts" }),
    schema: (context) => {
        baseSchema(context).extend({
            date: z.date(),
            license: z.string().optional(),
            tags: z.array(z.string()).optional(),
            links: z
                .array(
                    baseSchema(context).extend({
                        url: z.string(),
                        image: z
                            .union([context.image(), z.string()])
                            .optional(),
                    }),
                )
                .optional(),
            draft: z.boolean().optional(),
            math: z.boolean().optional(),
        });
    },
});

const projectCollection = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "content/projects" }),
    schema: (context) =>
        baseSchema(context).extend({
            url: z.string(),
            description: z.record(z.string(), z.string()),
        }),
});

export const collections = {
    posts: postCollection,
    projects: projectCollection,
};
