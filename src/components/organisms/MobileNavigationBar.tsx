import NavigationMenu from "components/molecules/NavigationMenu";
import NavigationToolBar from "components/molecules/NavigationToolBar";
import SettingsMenu from "components/molecules/SettingsMenu";
import SocialMenu from "components/molecules/SocialMenu";
import type { NavigationBarProps } from "components/organisms/NavigationBar";
import { useState } from "react";

const MobileNavigationBar = ({ language, currentURL }: NavigationBarProps) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <nav card p-sm flex="~ col" items-center>
            <div
                role="menu"
                className={
                    expanded ? "max-h-screen visible" : "max-h-0 invisible"
                }
                overflow-hidden
                transition-all
                duration-300
                ease-in-out
                w-full
                divide-y
            >
                <div flex="~ col" items-center>
                    <SettingsMenu role="group" language={language} />
                </div>

                <SocialMenu role="group" language={language} />

                <div flex="~ col" items-center>
                    <NavigationMenu
                        role="group"
                        language={language}
                        currentURL={currentURL}
                    />
                </div>
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
