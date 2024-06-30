import { getRelativeLocaleUrl } from "astro:i18n";
import Avatar from "components/atoms/Avatar";
import { SITE_AVATAR } from "config";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { getTranslation } from "utils/getTranslation";

interface InfoCardProps extends TranslatedElement {
    avatar?: ImageMetadata;
}

const NavigationHeader = ({
    language,
    avatar = SITE_AVATAR,
}: InfoCardProps) => (
    <>
        <Avatar
            image={avatar}
            size="30"
            alt={getTranslation(language).siteAvatar}
            url={getRelativeLocaleUrl(language, "/about")}
        />

        <h1 block text="center xl" font-bold>
            {getTranslation(language).siteTitle}
        </h1>
    </>
);

export default NavigationHeader;
