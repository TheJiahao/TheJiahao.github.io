import LanguageSelector from "components/molecules/LanguageSelector";
import Menu from "components/molecules/Menu";
import { DEFAULT_LANGUAGE } from "config";

interface SettingsMenuProps {
    language?: string;
}

const SettingsMenu = ({ language = DEFAULT_LANGUAGE }: SettingsMenuProps) => (
    <Menu>
        <LanguageSelector defaultLanguage={language} />
    </Menu>
);

export default SettingsMenu;
