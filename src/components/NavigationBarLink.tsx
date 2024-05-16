interface NavigationBarLinkProps {
    href: string;
    text: string;
    icon: string;
}

const NavigationBarLink = ({ href, text, icon }: NavigationBarLinkProps) => (
    <a href={href} className="inline-flex" un-gap="10" un-leading="4">
        <span className={icon} />
        <span>{text}</span>
    </a>
);

export default NavigationBarLink;
