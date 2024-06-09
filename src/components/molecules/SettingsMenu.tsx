import LanguageSelector from "components/molecules/LanguageSelector";
import Menu from "components/molecules/Menu";
import { DEFAULT_LANGUAGE } from "config";
import { getTranslation } from "utils/getTranslation";

interface SettingsMenuProps {
    language?: string;
}

const SettingsMenu = ({ language = DEFAULT_LANGUAGE }: SettingsMenuProps) => (
    <Menu role="group" aria-label={getTranslation(language).settings}>
        <LanguageSelector defaultLanguage={language} />
    </Menu>
);

export default SettingsMenu;
