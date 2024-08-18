import reactRenderer from "@astrojs/react/server.js";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import mdxRenderer from "astro/jsx/server.js";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";

const markdownParset = new MarkdownIt();
const container = await AstroContainer.create();

container.addServerRenderer({ renderer: mdxRenderer, name: "mdx" });
container.addServerRenderer({ renderer: reactRenderer, name: "react" });
container.addClientRenderer({
    name: "@astrojs/react",
    entrypoint: "@astrojs/react/client.js",
});

/**
 * Renders Astro component to HTML.
 *
 * @param component Astro component to render
 * @returns Rendered component as HTML
 */
export const renderHTML = async (component: AstroComponentFactory) =>
    await container.renderToString(component);

/**
 * Renders Markdown to HTML.
 *
 * @param content Markdown string to render
 * @returns HTML string
 */
export const renderMarkdown = (content: string): string => {
    return sanitizeHtml(markdownParset.renderInline(content));
};
