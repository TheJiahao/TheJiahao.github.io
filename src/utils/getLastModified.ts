import { execSync } from "child_process";

export const getLastModified = (file: string): Date => {
    const result = execSync(
        `git log -1 --pretty="format:%cI" "${file}"`,
    ).toString();

    return new Date(result);
};
