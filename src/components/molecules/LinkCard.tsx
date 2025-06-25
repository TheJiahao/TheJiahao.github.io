import type { Page } from "interfaces/Page";

interface LinkProps extends Omit<Page, "description"> {
    description?: string;
}

const LinkCard = ({ title, description, url, image }: LinkProps) => (
    <article title={title} clickable focus-within:bg-hover focus:bg-hover p-8>
        <a href={url} grid="~ cols-[minmax(0,1fr)_auto] flow-col" gap-8>
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
                    rounded-md
                />
            )}
        </a>
    </article>
);

export type { LinkProps };
export default LinkCard;
