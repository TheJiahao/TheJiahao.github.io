import { getContainerRenderer as mdxContainerRenderer } from "@astrojs/mdx";
import { getContainerRenderer as reactContainerRenderer } from "@astrojs/react";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import { loadRenderers } from "astro:container";

const renderers = await loadRenderers([
    reactContainerRenderer(),
    mdxContainerRenderer(),
]);
const container = await AstroContainer.create({ renderers });

/**
 * Renders Astro component to HTML.
 *
 * @param component Astro component to render
 * @returns HTML
 */
export const renderComponent = async (component: AstroComponentFactory) =>
    await container.renderToString(component);
