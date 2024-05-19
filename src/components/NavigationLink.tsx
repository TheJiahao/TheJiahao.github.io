interface NavigationLinkProps {
    href: string;
    text: string;
    icon: string;
}

const NavigationLink = ({ href, text, icon }: NavigationLinkProps) => (
    <li>
        <a href={href} inline-flex gap-10 leading-4>
            <span className={icon} />
            <span>{text}</span>
        </a>
    </li>
);

export type { NavigationLinkProps };
export default NavigationLink;
