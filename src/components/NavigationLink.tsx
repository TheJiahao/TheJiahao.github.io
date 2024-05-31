import classnames from "classnames";
import { type IconLink } from "../interfaces/IconLink";

const NavigationLink = ({ url, text, icon }: IconLink) => (
    <a
        href={url}
        inline-flex
        gap-2
        leading-4
        className={classnames(classNames)}
    >
        <span className={icon} />
        <span>{text}</span>
    </a>
);

export default NavigationLink;
