import mdxRenderer from "@astrojs/mdx/server.js";
import reactRenderer from "@astrojs/react/server.js";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";

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
