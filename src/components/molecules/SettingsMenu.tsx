import LanguageSelector from "components/molecules/LanguageSelector";
import Menu, { type MenuProps } from "components/molecules/Menu";
import { DEFAULT_LANGUAGE } from "config";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { getTranslation } from "utils/getTranslation";

interface SettingsMenuProps extends MenuProps, TranslatedElement {}

const SettingsMenu = ({
    language = DEFAULT_LANGUAGE,
    ...props
}: SettingsMenuProps) => (
    <Menu aria-label={getTranslation(language).settings} {...props}>
        <LanguageSelector defaultLanguage={language} />
    </Menu>
);

export default SettingsMenu;
