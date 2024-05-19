import { describe, expect, test, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import NavigationBar from "../../components/NavigationBar";

describe("NavigationBar", () => {
    describe("avatar", () => {
        let avatar: HTMLElement | null = null;

        beforeEach(() => {
            render(<NavigationBar />);
            avatar = screen.getByAltText("Avatar");
        });

        test("has non-empty src", () => {
            expect(avatar).not.toHaveProperty("src", "");
            expect(avatar).not.toHaveProperty("src", undefined);
        });
    });
});
