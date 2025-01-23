/**
 * Translates an relative URL to an identifier.
 * @param url Relative URL
 * @returns Identifier
 */
export const getViewTransitionName = (url: string) =>
    url.replace(/^\//, "").replaceAll("/", "-");
