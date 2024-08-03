interface AvatarProps {
    image: ImageMetadata;
    alt: string;
    /** Avatar size in UnoCSS safelist */
    size: string;
}

const Avatar = ({ image, size, alt }: AvatarProps) => (
    <img
        className={`size-${size}`}
        {...image}
        alt={alt}
        drop-shadow-md
        rounded-full
        object-contain
    />
);

export default Avatar;
