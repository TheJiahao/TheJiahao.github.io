import NavigationMenu from "components/molecules/NavigationMenu";
import NavigationToolBar from "components/molecules/NavigationToolBar";
import SettingsMenu from "components/molecules/SettingsMenu";
import SocialMenu from "components/molecules/SocialMenu";
import { DEFAULT_LANGUAGE } from "config";
import { useState } from "react";

interface MobileNavigationBarProps {
    language?: string;
}

const MobileNavigationBar = ({
    language = DEFAULT_LANGUAGE,
}: MobileNavigationBarProps) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <nav card p-sm flex="~ col" items-center>
            <div
                role="menu"
                className={
                    expanded
                        ? "max-h-screen opacity-100 visible"
                        : "max-h-0 opacity-0 invisible"
                }
                overflow-hidden
                transition-all
                duration-150
                ease-in-out
                w-full
                divide-y
            >
                <div flex="~ col" items-center>
                    <SettingsMenu role="group" language={language} />
                </div>

                <SocialMenu role="group" language={language} />

                <div flex="~ col" items-center>
                    <NavigationMenu language={language} />
                </div>
            </div>

            <NavigationToolBar
                language={language}
                handleExpand={handleExpand}
                aria-haspopup="menu"
                aria-expanded={expanded}
            />
        </nav>
    );
};

export default MobileNavigationBar;
