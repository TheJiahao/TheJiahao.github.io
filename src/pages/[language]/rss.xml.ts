import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getAbsoluteLocaleUrl } from "astro:i18n";
import { SITE_DESCRIPTION, SITE_TITLE } from "config";
import { languageCodes } from "localization";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";
import getBlogs from "utils/getBlogs";

export function getStaticPaths() {
    return languageCodes.map((language) => ({ params: { language } }));
}

export function GET({ params, site }: APIContext) {
    if (!site) {
        return new Response("Site is not defined", { status: 500 });
    }

    const language = params.language;
    const blogs = getBlogs();
    const parser = new MarkdownIt();

    if (!language) {
        throw new TypeError("Invalid language");
    }

    return rss({
        title: SITE_TITLE[language],
        description: SITE_DESCRIPTION[language],
        site: getAbsoluteLocaleUrl(language, "/"),
        items: blogs.map(({ data, slug, body }) => ({
            title: data.title,
            description: data.description,
            link: getAbsoluteLocaleUrl(language, `posts/${slug}`),
            pubDate: data.date,
            content: sanitizeHtml(parser.render(body), {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
            }),
        })),
        customData: `<language>${language}</language>`,
    });
}
