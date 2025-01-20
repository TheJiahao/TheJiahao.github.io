import NavigationHeader from "components/molecules/NavigationHeader";
import NavigationMenu from "components/molecules/NavigationMenu";
import SettingsMenu from "components/molecules/SettingsMenu";
import SocialMenu from "components/molecules/SocialMenu";
import type { TranslatedElement } from "interfaces/TranslatedElement";

interface NavigationBarProps extends TranslatedElement {
    currentURL: string;
}

const NavigationBar = ({ language }: NavigationBarProps) => (
    <nav card p-4 flex="~ col" gap-4 items-center h-full w-60 overflow-auto>
        <NavigationHeader language={language} />

        <SocialMenu language={language} />
        <NavigationMenu language={language} />
        <SettingsMenu language={language} mt-auto />
    </nav>
);

export default NavigationBar;
export { type NavigationBarProps };
