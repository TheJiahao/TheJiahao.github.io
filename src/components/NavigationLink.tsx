interface NavigationLinkProps {
    href: string;
    text: string;
    icon: string;
}

const NavigationLink = ({ href, text, icon }: NavigationLinkProps) => (
    <a href={href} inline-flex gap-10 leading-4>
        <span className={icon} />
        <span>{text}</span>
    </a>
);

export type { NavigationLinkProps };
export default NavigationLink;
