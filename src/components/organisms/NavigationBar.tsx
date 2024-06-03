import { Transition } from "@headlessui/react";
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

            <Transition
                show={expanded}
                enter="transition-all duration-150 ease-in"
                enterFrom="max-h-0"
                enterTo="max-h-screen"
                leave="transition-all duration-100 ease-out"
                leaveFrom="max-h-screen opacity-100"
                leaveTo="max-h-0 opcaity-0"
                overflow-hidden
            >
                <div w-full lg="block">
                    <NavigationMenu language={language} />
                </div>
            </Transition>

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
