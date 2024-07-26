import type { Page } from "interfaces/Page";

interface LinkProps extends Omit<Page, "content" | "image"> {
    content?: string;
    image?: ImageMetadata | string;
}

const LinkCard = ({ title, content, url, image }: LinkProps) => (
    <article title={title} clickable>
        <a
            href={url}
            flex="~ row"
            w-full
            p-8
            target="_blank"
            rel="noreferrer noopener"
        >
            <div flex-auto leading-loose>
                <h1
                    dangerouslySetInnerHTML={{ __html: title }}
                    text="primary xl"
                    font-bold
                />
                <p
                    text-secondary
                    line-clamp-3
                    dangerouslySetInnerHTML={{ __html: content ?? "" }}
                />
            </div>

            {image && (
                <img
                    src={typeof image == "string" ? image : image.src}
                    alt={title}
                    width="50vh"
                    height="50vh"
                    my-auto
                    flex-none
                    object-contain
                />
            )}
        </a>
    </article>
);

export type { LinkProps };
export default LinkCard;