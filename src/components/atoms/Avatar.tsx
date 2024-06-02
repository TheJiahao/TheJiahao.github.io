interface AvatarProps {
    image?: ImageMetadata;
    /** Avatar size in Tailwind format */
    size: string;
}

const Avatar = ({ image, size }: AvatarProps) => (
    <img
        {...image}
        alt="Avatar"
        size={size}
        drop-shadow-md
        rounded-full
        object-contain
    />
);

export default Avatar;
