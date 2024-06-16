import { render, screen } from "@testing-library/react";
import NavigationToolBar from "components/molecules/NavigationToolBar";
import { getTranslation } from "utils/getTranslation";
import { beforeEach, describe, expect, test, vi } from "vitest";

describe("<NavigationToolBar/>", () => {
    beforeEach(() => {
        render(<NavigationToolBar language="zh-cn" handleExpand={vi.fn()} />);
    });

    test("has avatar", () => {
        expect(
            screen.getByRole("img", {
                name: getTranslation("zh-cn").siteAvatar,
            }),
        ).toBeInTheDocument();
    });

    test("has menu button", () => {
        expect(
            screen.getByRole("button", {
                name: getTranslation("zh-cn").showNavigationMenu,
            }),
        ).toBeInTheDocument();
    });
});
