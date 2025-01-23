/**
 * Translates an URL to an identifier.
 * @param url
 * @returns Identifier
 */
export const getViewTransitionName = (url: string) =>
    url.replace(/^\//, "").replaceAll("/", "-");
