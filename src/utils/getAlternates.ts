import type { RawBlogEntry } from "interfaces/BlogEntry";

export const getAlternates = (
    blogs: RawBlogEntry[],
): Map<string, Set<{ language: string; slug: string }>> => {
    const blogAlternates = new Map<
        string,
        Set<{ language: string; slug: string }>
    >();

    for (const blog of blogs) {
        const alternates = blogAlternates.get(blog.slug) || new Set();

        alternates.add({
            language: blog.data.language,
            slug: blog.slug,
        });

        blogAlternates.set(blog.slug, alternates);
    }

    return blogAlternates;
};
