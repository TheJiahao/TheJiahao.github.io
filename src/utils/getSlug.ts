export const getSlug = (pathname: string): string =>
    pathname.split("/").slice(2).join("/");
