import type { RawBlogEntry } from "interfaces/BlogEntry";

export const getAlternates = (blogs: RawBlogEntry[]): Map<string, string[]> => {
    const blogAlternates = new Map<string, string[]>();

    for (const blog of blogs) {
        const alternates = blogAlternates.get(blog.slug) || [];

        alternates.push(blog.data.language);

        blogAlternates.set(blog.slug, alternates);
    }

    return blogAlternates;
};
