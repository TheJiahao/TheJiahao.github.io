import type { Page } from "interfaces/Page";

interface LinkProps extends Omit<Page, "description"> {
    description?: string;
}

const LinkCard = ({ title, description, url, image }: LinkProps) => (
    <a href={url} clickable focus-within:bg-hover focus:bg-hover p-8 block>
        <article
            title={title}
            grid="~ cols-[minmax(0,1fr)_auto] flow-col"
            gap-8
        >
            <div
                className="[&_mark]:text-primary [&_mark]:bg-accent/35"
                tabIndex={-1}
            >
                <h1 text="primary xl" font-bold>
                    {title}
                </h1>
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
                    rounded-md
                />
            )}
        </article>
    </a>
);

export type { LinkProps };
export default LinkCard;
