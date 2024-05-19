interface NavigationBarLinkProps {
    href: string;
    text: string;
    icon: string;
}

const NavigationLink = ({ href, text, icon }: NavigationBarLinkProps) => (
    <li>
        <a href={href} inline-flex gap-10 leading-4>
            <span className={icon} />
            <span>{text}</span>
        </a>
    </li>
);

export default NavigationLink;
