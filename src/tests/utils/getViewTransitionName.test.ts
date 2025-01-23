import { getViewTransitionName } from "utils/getViewTransitionName";
import { describe, expect, test } from "vitest";

describe("getViewTransitionName()", () => {
    test("removes leading slash", () => {
        expect(getViewTransitionName("/aa/b")).toBe("aa-b");
    });

    test("replaces slashes with hyphens", () => {
        expect(getViewTransitionName("/aa/b/c")).toBe("aa-b-c");
    });
});
