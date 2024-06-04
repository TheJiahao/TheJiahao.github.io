import NavigationHeader from "components/molecules/NavigationHeader";
import NavigationMenu from "components/molecules/NavigationMenu";
import NavigationToolBar from "components/molecules/NavigationToolBar";
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
        <nav card p-4 flex="~ col" gap-4 items-center lg="h-full w-50">
            <header
                className="hidden"
                items-center
                p-2
                w-full
                lg="flex flex-col"
            >
                <NavigationHeader language={language} />
            </header>

            <div
                w-full
                lg="block max-h-unset visible opacity-100"
                className={
                    expanded
                        ? "max-h-screen opacity-100 visible"
                        : "max-h-0 opacity-0 invisible"
                }
                overflow-hidden
                transition-all
                duration-150
                ease-in-out
            >
                <NavigationMenu language={language} />
            </div>

            <div w-full sticky bottom-0 bg-white lg="hidden">
                <NavigationToolBar
                    language={language}
                    handleExpand={handleExpand}
                />
            </div>
        </nav>
    );
};

export default NavigationBar;
