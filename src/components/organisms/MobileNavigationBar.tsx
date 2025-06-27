import NavigationMenu from "components/molecules/NavigationMenu";
import NavigationToolBar from "components/molecules/NavigationToolBar";
import SettingsMenu from "components/molecules/SettingsMenu";
import SocialMenu from "components/molecules/SocialMenu";
import type { NavigationBarProps } from "components/organisms/NavigationBar";
import { useState } from "react";

const MobileNavigationBar = ({ language }: NavigationBarProps) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <nav card p-sm flex="~ col" items-center>
            <div
                role="menu"
                className={[
                    "*:not-first:py-4 *:first:pb-4",
                    expanded ? "max-h-screen visible" : "max-h-0 invisible",
                ].join(" ")}
                flex="~ col"
                overflow-hidden
                transition-all
                duration-300
                ease-in-out
                w-full
                divide="y gray-200"
            >
                <SettingsMenu role="group" language={language} items-center />
                <SocialMenu role="group" language={language} />
                <NavigationMenu role="group" language={language} items-center />
            </div>

            <NavigationToolBar
                language={language}
                handleExpand={handleExpand}
                aria-haspopup="menu"
                aria-expanded={expanded}
                expanded={expanded}
                text-secondary
            />
        </nav>
    );
};

export default MobileNavigationBar;
