interface NavigationLinkProps {
    url: string;
    text: string;
    icon: string;
}

const NavigationLink = ({ url, text, icon }: NavigationLinkProps) => (
    <a href={url} inline-flex gap-10 leading-4>
        <span className={icon} />
        <span>{text}</span>
    </a>
);

export type { NavigationLinkProps };
export default NavigationLink;
