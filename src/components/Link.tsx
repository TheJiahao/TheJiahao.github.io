interface LinkProps {
    title: string;
    description?: string;
    url: string;
    image?: string;
}

const Link = ({ title, description, url, image }: LinkProps) => {
    return (
        <a href={url} className="flex" un-gap="4" un-px="8" un-py="2">
            <div un-flex="auto">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <img
                src={image}
                alt={`Cover image of "${title}"`}
                width="50vh"
                height="50vh"
                un-my="auto"
                un-flex="none"
                un-object="contain"
            />
        </a>
    );
};

export type { LinkProps };
export default Link;
