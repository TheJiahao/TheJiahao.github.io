import { formatDate } from "utils/formatDate";
import { expect, test } from "vitest";

test("date is in YYYY-MM-DD format", () => {
    const date = new Date("2021-01-01T23:44:55.000Z");

    expect(formatDate(date)).toBe("2021-01-01");
});
