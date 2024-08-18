import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import sanitizeHtml from "sanitize-html";
import { unified } from "unified";

/**
 * Renders Markdown to HTML.
 *
 * @param content Markdown string to render
 * @returns HTML string
 */
export const renderMarkdown = (content: string): string => {
    const result = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify)
        .processSync(content);

    return sanitizeHtml(String(result));
};
