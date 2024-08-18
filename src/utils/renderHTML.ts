import reactRenderer from "@astrojs/react/server.js";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import mdxRenderer from "astro/jsx/server.js";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

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
 * @returns HTML
 */
export const renderComponent = async (component: AstroComponentFactory) =>
    await container.renderToString(component);

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

    return String(result);
};
