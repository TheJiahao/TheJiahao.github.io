import NavigationHeader from "components/molecules/NavigationHeader";
import NavigationMenu from "components/molecules/NavigationMenu";
import SocialMenu from "components/molecules/SocialMenu";
import type { TranslatedElement } from "interfaces/TranslatedElement";

const NavigationBar = ({ language }: TranslatedElement) => (
    <nav card p-4 flex="~ col" gap-4 items-center h-full w-50>
        <header items-center p-2 w-full lg="flex flex-col">
            <NavigationHeader language={language} />
        </header>

        <SocialMenu language={language} />
        <NavigationMenu language={language} />
    </nav>
);

export default NavigationBar;
