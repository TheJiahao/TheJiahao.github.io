import NavigationHeader from "components/molecules/NavigationHeader";
import NavigationMenu from "components/molecules/NavigationMenu";
import NavigationToolBar from "components/molecules/NavigationToolBar";
import { DEFAULT_LANGUAGE } from "config";

interface NavigationBarProps {
    language?: string;
}

const NavigationBar = ({ language = DEFAULT_LANGUAGE }: NavigationBarProps) => {
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

            <div className="hidden" lg="block w-full">
                <NavigationMenu />
            </div>

            <div w-full sticky bottom-0 lg="hidden">
                <NavigationToolBar />
            </div>
        </nav>
    );
};

export default NavigationBar;
