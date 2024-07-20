import type { APIContext } from "astro";
import { getAbsoluteLocaleUrl } from "astro:i18n";
import { languageCodes } from "localization";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";
import getBlogs from "utils/getBlogs";

export function getStaticPaths() {
    return languageCodes.map((language) => ({ params: { language } }));
}

export function GET({ params }: APIContext) {
    const language = params.language;
    const parser = new MarkdownIt();

    if (!language) {
        throw new TypeError("Invalid language");
    }

    const blogs = getBlogs()
        .filter(({ data }) => data.language === language)
        .map(({ data, slug, body }) => ({
            title: data.title,
            url: getAbsoluteLocaleUrl(data.language, `posts/${slug}`),
            content: sanitizeHtml(parser.render(body)),
        }));

    return new Response(JSON.stringify(blogs));
}
