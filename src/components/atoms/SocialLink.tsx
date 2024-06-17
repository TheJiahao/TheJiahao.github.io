interface SocialLinkProps {
    url: string;
    icon: string;
    title: string;
}

const SocialLink = ({ url, icon, title }: SocialLinkProps) => (
    <a
        className={icon}
        href={url}
        title={title}
        size-10
        block
        target="_blank"
        rel="noopener noreferrer"
    />
);

export default SocialLink;
export type { SocialLinkProps };
