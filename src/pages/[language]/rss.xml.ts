import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getAbsoluteLocaleUrl } from "astro:i18n";
import { SITE_DESCRIPTION, SITE_TITLE } from "config";
import { languageCodes } from "localization";
import sanitizeHtml from "sanitize-html";
import getBlogs from "utils/getBlogs";
import { renderHTML } from "utils/renderHTML";

export function getStaticPaths() {
    return languageCodes.map((language) => ({ params: { language } }));
}

export async function GET({ params, site }: APIContext) {
    if (!site) {
        return new Response("Site is not defined", { status: 500 });
    }

    const language = params.language;
    const blogs = getBlogs();

    if (!language) {
        throw new TypeError("Invalid language");
    }

    return rss({
        title: SITE_TITLE[language],
        description: SITE_DESCRIPTION[language],
        site: getAbsoluteLocaleUrl(language),
        items: await Promise.all(
            blogs.map(async ({ data, render, slug }) => {
                const { title, description, date: pubDate } = data;
                const { Content } = await render();
                const postHTML = await renderHTML(Content);

                return {
                    title,
                    description,
                    link: getAbsoluteLocaleUrl(language, `posts/${slug}`),
                    pubDate,
                    content: sanitizeHtml(postHTML, {
                        allowedTags: sanitizeHtml.defaults.allowedTags.concat([
                            "img",
                        ]),
                    }),
                };
            }),
        ),
        customData: `<language>${language}</language>`,
    });
}
