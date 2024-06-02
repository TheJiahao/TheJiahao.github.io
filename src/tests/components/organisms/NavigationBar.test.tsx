import { render, screen } from "@testing-library/react";
import NavigationBar from "components/organisms/NavigationBar";
import { beforeEach, describe, expect, test } from "vitest";

describe("<NavigationBar/>", () => {
    beforeEach(() => {
        render(<NavigationBar />);
    });

    test("has header", () => {
        expect(screen.getByRole("banner")).toBeVisible();
    });
});
