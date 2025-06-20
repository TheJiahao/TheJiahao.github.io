import type { APIContext } from "astro";
import { render } from "astro:content";
import { getRelativeLocaleUrl } from "astro:i18n";
import { BLOG_IMAGE_PLACEHOLDER } from "config";
import fuzzysort from "fuzzysort";
import type { PreparedPage } from "interfaces/PreparedPage";
import { languageCodes } from "localization";
import sanitizeHtml from "sanitize-html";
import { getBlogs } from "utils/getBlogs";
import { renderComponent } from "utils/renderComponent";

export function getStaticPaths() {
    return languageCodes.map((language) => ({ params: { language } }));
}

export async function GET({ params }: APIContext) {
    const language = params.language;

    if (!language) {
        throw new TypeError("Invalid language");
    }

    const blogs: PreparedPage[] = await Promise.all(
        getBlogs()
            .filter(({ data }) => data.language === language)
            .map(async (blog) => {
                const { data, slug } = blog;
                const { title } = data;
                const image = (({ src, width, height, format }) => ({
                    src,
                    width,
                    height,
                    format,
                }))(data.image || BLOG_IMAGE_PLACEHOLDER);

                const { Content } = await render(blog);
                const postHTML = await renderComponent(Content);

                const description = fuzzysort.prepare(
                    sanitizeHtml(postHTML, {
                        allowedTags: sanitizeHtml.defaults.allowedTags.filter(
                            (tag) => tag !== "a",
                        ),
                    }),
                );

                return {
                    title: fuzzysort.prepare(title),
                    url: getRelativeLocaleUrl(data.language, `posts/${slug}`),
                    description,
                    image,
                };
            }),
    );

    return new Response(JSON.stringify(blogs));
}
