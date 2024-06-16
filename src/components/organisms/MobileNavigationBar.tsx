import NavigationMenu from "components/molecules/NavigationMenu";
import NavigationToolBar from "components/molecules/NavigationToolBar";
import SettingsMenu from "components/molecules/SettingsMenu";
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
                <SettingsMenu language={language} />
                <NavigationMenu language={language} />
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
