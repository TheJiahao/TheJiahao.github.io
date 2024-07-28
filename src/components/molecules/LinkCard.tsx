import type { Page } from "interfaces/Page";

interface LinkProps extends Omit<Page, "description" | "image"> {
    description?: string;
    image?: ImageMetadata | string;
}

const LinkCard = ({ title, description, url, image }: LinkProps) => (
    <article title={title} clickable p-8>
        <a
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            grid="~ cols-[minmax(0,1fr)_auto] flow-col"
            gap-8
        >
            <div tabIndex={-1}>
                <h1
                    dangerouslySetInnerHTML={{ __html: title }}
                    text="primary xl"
                    font-bold
                />
                <p
                    text-secondary
                    line-clamp-3
                    dangerouslySetInnerHTML={{ __html: description ?? "" }}
                />
            </div>
            {image && (
                <img
                    src={typeof image == "string" ? image : image.src}
                    alt={title}
                    size-15
                    object-contain
                    self-center
                />
            )}
        </a>
    </article>
);

export type { LinkProps };
export default LinkCard;
