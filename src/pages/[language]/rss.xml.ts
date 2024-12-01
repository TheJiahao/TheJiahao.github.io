import rss from "@astrojs/rss";

import type { APIContext } from "astro";
import { getAbsoluteLocaleUrl } from "astro:i18n";
import { SITE_DESCRIPTION, SITE_TITLE } from "config";
import { languageCodes } from "localization";
import rehypeAbsImage from "rehype-abs-image";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import sanitizeHtml from "sanitize-html";
import { unified } from "unified";
import { getBlogs } from "utils/getBlogs";
import { renderComponent } from "utils/renderComponent";

const convertImageURL = (content: string): string => {
    const baseURL = process.env.SITE_BASE_URL;

    if (!baseURL) {
        throw new Error("SITE_BASE_URL is not defined");
    }

    return unified()
        .use(rehypeParse)
        .use(rehypeAbsImage, { prefix: baseURL })
        .use(rehypeStringify)
        .processSync(content)
        .toString();
};

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
        stylesheet: "/rss/pretty-feed-v3.xsl",
        items: await Promise.all(
            blogs
                .filter(({ data }) => data.language == language)
                .map(async ({ data, render, slug }) => {
                    const { title, description, date: pubDate } = data;

                    const { Content } = await render();
                    const postHTML = convertImageURL(
                        await renderComponent(Content),
                    );

                    const content = sanitizeHtml(postHTML, {
                        allowedTags: sanitizeHtml.defaults.allowedTags.concat([
                            "img",
                        ]),
                    });

                    return {
                        title,
                        description,
                        link: getAbsoluteLocaleUrl(language, `posts/${slug}`),
                        pubDate,
                        content,
                    };
                }),
        ),
        customData: `<language>
                        ${language}
                    </language>
                    <follow_challenge>
                        <feedId>82854306693724160</feedId>
                        <userId>82683986043373568</userId>
                    </follow_challenge>`,
    });
}
