import { DEFAULT_LANGUAGE, SITE_AVATAR } from "config";
import { getTranslation } from "utils/getTranslation";

interface InfoCardProps {
    avatar?: ImageMetadata;
    language?: string;
}

const InfoCard = ({
    language = DEFAULT_LANGUAGE,
    avatar = SITE_AVATAR,
}: InfoCardProps) => (
    <div card>
        <img
            {...avatar}
            alt="Avatar"
            drop-shadow-md
            rounded-full
            object-contain
            size-30
            mx-auto
        />

        <h1 className="hidden" lg="block text-center text-xl font-bold">
            {getTranslation(language).siteTitle}
        </h1>
    </div>
);

export default InfoCard;
