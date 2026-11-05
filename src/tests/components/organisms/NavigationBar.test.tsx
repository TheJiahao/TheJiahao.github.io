import { render, screen } from "@testing-library/react";
import NavigationBar from "components/organisms/NavigationBar";
import { beforeEach, describe, expect, test } from "vite-plus/test";

describe("<NavigationBar/>", () => {
    beforeEach(() => {
        render(<NavigationBar language="zh-cn" currentURL="/zh-cn" />);
    });

    test("has header", () => {
        expect(screen.getByRole("banner")).toBeVisible();
    });
});
