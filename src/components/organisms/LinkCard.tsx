interface LinkProps {
    title: string;
    description?: string;
    url: string;
    image?: string;
}

const LinkCard = ({ title, description, url, image }: LinkProps) => {
    return (
        <a href={url} flex gap-4 p-8>
            <div flex-auto leading-loose>
                <h2 text="primary xl" font-bold>
                    {title}
                </h2>
                <p text-secondary>{description}</p>
            </div>
            <img
                src={image}
                alt={title}
                width="50vh"
                height="50vh"
                my-auto
                flex-none
                object-contain
            />
        </a>
    );
};

export type { LinkProps };
export default LinkCard;
