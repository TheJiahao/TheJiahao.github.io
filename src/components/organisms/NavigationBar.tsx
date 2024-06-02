import IconComponent from "components/atoms/IconComponent";
import InfoCard from "components/molecules/InfoCard";
import Menu from "components/molecules/Menu";
import { DEFAULT_LANGUAGE, SITE_AVATAR } from "config";
import NAVIGATION_LINKS from "config/navigation";
import { type IconLink } from "interfaces/IconLink";

interface NavigationBarProps {
    language?: string;
    avatar?: ImageMetadata;
    links?: IconLink[];
}

const NavigationBar = ({
    language = DEFAULT_LANGUAGE,
    avatar = SITE_AVATAR,
    links = NAVIGATION_LINKS[language],
}: NavigationBarProps) => {
    return (
        <nav card p-4 flex="~ col" gap-4 items-center lg="h-full w-50">
            <div className="hidden" w-full lg="block">
                <InfoCard avatar={avatar} language={language} />
            </div>

            <div
                w-full
                sticky
                bottom-0
                grid
                grid-cols-3
                items-center
                lg="hidden"
            >
                <img
                    {...avatar}
                    alt="Avatar"
                    size-15
                    drop-shadow-md
                    rounded-full
                    object-contain
                />

                <div />

                <div
                    className="i-ic-round-menu"
                    justify-self-end
                    size-15
                    lg="hidden"
                />
            </div>

            <div className="hidden" card lg="block w-full">
                <Menu>
                    {links.map((link) => (
                        <a key={link.text} href={link.url}>
                            <IconComponent icon={link.icon}>
                                {link.text}
                            </IconComponent>
                        </a>
                    ))}
                </Menu>
            </div>
        </nav>
    );
};

export default NavigationBar;
