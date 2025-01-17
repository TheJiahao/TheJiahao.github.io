import type { SectionHeading } from "interfaces/SectionHeading";
import { getCurrentHeading } from "utils/getCurrentHeading";
import { describe, expect, test } from "vitest";

const getHeadingIDs = (headings: SectionHeading[]) => headings.map((h) => h.id);

describe("getCurrentHeading()", () => {
    describe("returns null", () => {
        test("when no visible headings", () => {
            const headings: SectionHeading[] = [
                { id: "introduction", depth: 2 },
                { id: "results", depth: 3 },
                { id: "conclusion", depth: 2 },
            ];

            expect(getCurrentHeading(headings, new Set())).toBe(null);
        });

        test("when no headings", () => {
            const headings: SectionHeading[] = [];

            expect(getCurrentHeading(headings, new Set())).toBe(null);
        });
    });

    test("returns first when depths are same", () => {
        const headings: SectionHeading[] = [
            { id: "introduction", depth: 2 },
            { id: "results", depth: 2 },
            { id: "conclusion", depth: 2 },
        ];

        expect(
            getCurrentHeading(headings, new Set(getHeadingIDs(headings))),
        ).toBe("introduction");
    });

    test("returns last when only one top-level heading", () => {
        const headings: SectionHeading[] = [
            { id: "milky-way", depth: 2 },
            { id: "solar-system", depth: 3 },
            { id: "earth", depth: 4 },
        ];

        expect(
            getCurrentHeading(headings, new Set(getHeadingIDs(headings))),
        ).toBe("earth");
    });

    describe("returns first visible", () => {
        test("when under first heading", () => {
            const headings: SectionHeading[] = [
                { id: "introduction", depth: 2 },
                { id: "history", depth: 3 },
                { id: "background", depth: 2 },
                { id: "concepts", depth: 3 },
            ];

            expect(
                getCurrentHeading(headings, new Set(getHeadingIDs(headings))),
            ).toBe("history");
        });

        test("when not under first heading", () => {
            const headings: SectionHeading[] = [
                { id: "introduction", depth: 2 },
                { id: "background", depth: 2 },
                { id: "concepts", depth: 3 },
                { id: "conclusion", depth: 2 },
            ];

            expect(
                getCurrentHeading(headings, new Set(getHeadingIDs(headings))),
            ).toBe("introduction");
        });
    });
});
