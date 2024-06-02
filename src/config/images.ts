import getImage from "utils/getImage";

const SITE_AVATAR = await getImage("/src/assets/images/avatar.svg");
const BLOG_IMAGE_PLACEHOLDER = await getImage(
    "/src/assets/images/cover_placeholder.svg",
);

export { BLOG_IMAGE_PLACEHOLDER, SITE_AVATAR };
