import Avatar from "components/atoms/Avatar";
import { SITE_AVATAR, SITE_TITLE } from "config";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { getTranslation } from "utils/getTranslation";

interface InfoCardProps extends TranslatedElement {
    avatar?: ImageMetadata;
}

const NavigationHeader = ({
    language,
    avatar = SITE_AVATAR,
}: InfoCardProps) => (
    <header flex flex-col items-center gap-sm>
        <Avatar
            image={avatar}
            size="30"
            alt={getTranslation(language).siteAvatar}
        />

        <h1 block text="primary center xl" font-bold>
            {SITE_TITLE[language]}
        </h1>
    </header>
);

export default NavigationHeader;
