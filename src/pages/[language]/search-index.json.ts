import type { APIContext } from "astro";
import { getRelativeLocaleUrl } from "astro:i18n";
import { BLOG_IMAGE_PLACEHOLDER } from "config";
import fuzzysort from "fuzzysort";
import type { PreparedPage } from "interfaces/PreparedPage";
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

    const blogs: PreparedPage[] = getBlogs()
        .filter(({ data }) => data.language === language)
        .map(({ data, slug, body }) => ({
            title: data.title,
            url: getRelativeLocaleUrl(data.language, `posts/${slug}`),
            description: sanitizeHtml(parser.render(body), {
                allowedTags: sanitizeHtml.defaults.allowedTags.filter(
                    (tag) => tag !== "a",
                ),
            }),
            image: data.image ?? BLOG_IMAGE_PLACEHOLDER,
        }))
        .map((page) => ({
            ...page,
            title: fuzzysort.prepare(page.title),
            description: fuzzysort.prepare(page.description),
        }));

    return new Response(JSON.stringify(blogs));
}
