import type { FC, PropsWithChildren } from "react";

interface AvatarProps {
    image: ImageMetadata;
    /** Avatar size in Tailwind format */
    size: string;
    /** URL to navigate when clicking avatar */
    url?: string;
}

const Avatar = ({ image, size, url }: AvatarProps) => {
    const Parent: FC<PropsWithChildren> = ({ children }) =>
        url ? <a href={url}>{children}</a> : <>{children}</>;

    return (
        <Parent>
            <img
                {...image}
                alt="Avatar"
                size={size}
                drop-shadow-md
                rounded-full
                object-contain
            />
        </Parent>
    );
};

export default Avatar;
