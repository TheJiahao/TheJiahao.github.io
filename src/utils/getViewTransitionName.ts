import { v5 } from "uuid";

const NAME_SPACE = "731a464f-2cd4-4486-8722-e54357acbe1a";

/**
 * Generates an unique identifier from a string.
 * @param value
 * @returns Identifier
 */
export const getViewTransitionName = (value: string) => v5(value, NAME_SPACE);
