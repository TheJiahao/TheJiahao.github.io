import Avatar from "components/atoms/Avatar";
import InfoCard from "components/molecules/InfoCard";
import NavigationMenu from "components/molecules/NavigationMenu";
import { DEFAULT_LANGUAGE } from "config";

interface DesktopNavigationBarProps {
    language?: string;
}

const DesktopNavigationBar = ({
    language = DEFAULT_LANGUAGE,
}: DesktopNavigationBarProps) => {
    return (
        <nav card p-4 flex="~ col" gap-4 items-center lg="h-full w-50">
            <div className="hidden" w-full lg="block">
                <InfoCard language={language} />
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
                <Avatar size="15" />

                <div />

                <div
                    className="i-ic-round-menu"
                    justify-self-end
                    size-15
                    lg="hidden"
                />
            </div>

            <div className="hidden" card lg="block w-full">
                <NavigationMenu />
            </div>
        </nav>
    );
};

export default DesktopNavigationBar;
