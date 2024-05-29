import classnames from "classnames";

interface NavigationLinkProps {
    url: string;
    text: string;
    icon: string;
    classNames?: string[];
}

const NavigationLink = ({
    url,
    text,
    icon,
    classNames,
}: NavigationLinkProps) => (
    <a
        href={url}
        inline-flex
        gap-10
        leading-4
        className={classnames(classNames)}
    >
        <span className={icon} />
        <span>{text}</span>
    </a>
);

export type { NavigationLinkProps };
export default NavigationLink;
