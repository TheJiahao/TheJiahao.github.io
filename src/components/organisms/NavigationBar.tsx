import IconComponent from "components/atoms/IconComponent";
import Menu from "components/molecules/Menu";
import { DEFAULT_LANGUAGE, SITE_AVATAR } from "config";
import NAVIGATION_LINKS from "config/navigation";
import { type IconLink } from "interfaces/IconLink";
import { getTranslation } from "utils/getTranslation";

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
        <nav card p-4 flex="~ col" gap-4 items-center lg="card h-full w-50">
            <div
                w-full
                sticky
                bottom-0
                grid
                grid-cols-3
                items-center
                lg="block"
            >
                <img
                    {...avatar}
                    alt="Avatar"
                    size-15
                    drop-shadow-md
                    rounded-full
                    object-contain
                    lg="size-30 mx-auto"
                />

                <div />

                <div
                    className="i-ic-round-menu"
                    justify-self-end
                    size-15
                    lg="hidden"
                />

                <h1 className="hidden" lg="block text-center text-xl font-bold">
                    {getTranslation(language).siteTitle}
                </h1>
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
