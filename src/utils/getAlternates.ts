import type { AlternateLink } from "interfaces/AlternateLink";
import type { RawBlogEntry } from "interfaces/BlogEntry";

export const getAlternates = (
    blogs: RawBlogEntry[],
): Map<string, AlternateLink[]> => {
    const blogAlternates = new Map<string, AlternateLink[]>();

    for (const blog of blogs) {
        const alternates = blogAlternates.get(blog.slug) || [];

        alternates.push({
            language: blog.data.language,
            slug: blog.slug,
        });

        blogAlternates.set(blog.slug, alternates);
    }

    return blogAlternates;
};
