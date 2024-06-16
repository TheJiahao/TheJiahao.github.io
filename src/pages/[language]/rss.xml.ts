import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getAbsoluteLocaleUrl } from "astro:i18n";
import { languageCodes } from "localization";
import getBlogs from "utils/getBlogs";
import { getTranslation } from "utils/getTranslation";

export function getStaticPaths() {
    return languageCodes.map((language) => ({ params: { language } }));
}

export function GET({ params }: APIContext) {
    const language = params.language;
    const blogs = getBlogs();

    if (!language) {
        throw new TypeError("Invalid language");
    }

    return rss({
        title: getTranslation(language).siteTitle,
        description: getTranslation(language).siteDescription,
        site: getAbsoluteLocaleUrl(language, "/"),
        items: blogs.map(({ data, slug }) => ({
            title: data.title,
            description: data.description,
            link: getAbsoluteLocaleUrl(language, `posts/${slug}`),
            pubDate: data.date,
        })),
        customData: `<language>${language}</language>`,
    });
}
