interface LinkProps {
    title: string;
    description?: string;
    url: string;
    image?: ImageMetadata | string;
}

const LinkCard = ({ title, description, url, image }: LinkProps) => (
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
                <h1 text="primary xl" font-bold>
                    {title}
                </h1>
                <p
                    text-secondary
                    dangerouslySetInnerHTML={{ __html: description ?? "" }}
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
