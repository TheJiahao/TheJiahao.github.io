/**
 * Removes language prefix from pathname.
 *
 * @param pathname Pathname with language prefix.
 * @returns Pathname without language prefix.
 */
export const getSlug = (pathname: string): string =>
    pathname.split("/").slice(2).join("/");
