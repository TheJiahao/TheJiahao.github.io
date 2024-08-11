import { execSync } from "child_process";

/**
 * Gets last modified time from Git history.
 *
 * @param file File to get the last modified date
 * @returns Last modified time
 */
export const getLastModified = (file: string): Date => {
    const result = execSync(
        `git log -1 --pretty="format:%cI" "${file}"`,
    ).toString();

    return new Date(result);
};
