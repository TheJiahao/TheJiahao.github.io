import { DEFAULT_LANGUAGE } from "config";
import { getTranslation } from "utils/getTranslation";

interface MenuButtonProps {
    language?: string;
}

const MenuButton = ({ language = DEFAULT_LANGUAGE }: MenuButtonProps) => {
    return (
        <button
            aria-label={getTranslation(language).showNavigationMenu}
        ></button>
    );
};

export default MenuButton;
