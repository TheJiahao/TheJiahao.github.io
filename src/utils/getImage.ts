import type { ImageMetadata } from "astro";

const getImage = async (path: string): Promise<ImageMetadata> => {
    const images = import.meta.glob<{ default: ImageMetadata }>(
        "/src/assets/images/**",
    );

    if (!images[path]) {
        throw new Error(`Image not found: ${path}`);
    }

    return (await images[path]()).default;
};

export default getImage;
