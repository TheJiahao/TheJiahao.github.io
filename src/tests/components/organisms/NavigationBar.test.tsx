import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import NavigationBar from "../../../components/organisms/NavigationBar";

describe("<NavigationBar/>", () => {
    describe("avatar", () => {
        let avatar: HTMLElement;

        beforeEach(() => {
            render(<NavigationBar />);
            avatar = screen.getByAltText("Avatar");
        });

        test("exists", () => {
            expect(avatar).toBeVisible();
        });

        test("has valid src", () => {
            expect(avatar).toHaveAttribute(
                "src",
                expect.not.stringMatching(/^$/),
            );
        });
    });
});
