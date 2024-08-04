export const getSlug = (pathname: string): string => {
    return pathname.split("/").slice(2).join("/");
};
