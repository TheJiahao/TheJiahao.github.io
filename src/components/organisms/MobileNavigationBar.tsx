import NavigationMenu from "components/molecules/NavigationMenu";
import NavigationToolBar from "components/molecules/NavigationToolBar";
import SettingsMenu from "components/molecules/SettingsMenu";
import { DEFAULT_LANGUAGE } from "config";
import { useState } from "react";

interface NavigationBarProps {
    language?: string;
}

const NavigationBar = ({ language = DEFAULT_LANGUAGE }: NavigationBarProps) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <nav card p-4 flex="~ col" gap-4 items-center>
            <div
                className={
                    expanded
                        ? "max-h-screen opacity-100 visible"
                        : "max-h-0 opacity-0 invisible"
                }
                overflow-hidden
                transition-all
                duration-150
                ease-in-out
                divide-y
            >
                <SettingsMenu language={language} />
                <NavigationMenu language={language} />
            </div>
            <div w-full bg-white>
                <NavigationToolBar
                    language={language}
                    handleExpand={handleExpand}
                    aria-haspopup="menu"
                    aria-expanded={expanded}
                />
            </div>
        </nav>
    );
};

export default NavigationBar;
