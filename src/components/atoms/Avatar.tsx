import type { FC, PropsWithChildren } from "react";

interface AvatarProps {
    image: ImageMetadata;
    alt: string;
    /** Avatar size in Tailwind format */
    size: string;
    /** URL to navigate when clicking avatar */
    url?: string;
}
const ConditionalLink: FC<PropsWithChildren<{ url?: string }>> = ({
    children,
    url,
}) => (url ? <a href={url}>{children}</a> : <>{children}</>);

const Avatar = ({ image, size, url, alt }: AvatarProps) => (
    <ConditionalLink url={url}>
        <img
            {...image}
            alt={alt}
            size={size}
            drop-shadow-md
            rounded-full
            object-contain
        />
    </ConditionalLink>
);

export default Avatar;
