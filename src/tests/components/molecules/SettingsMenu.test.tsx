import { render, screen } from "@testing-library/react";
import SettingsMenu from "components/molecules/SettingsMenu";
import { getTranslation } from "utils/getTranslation";
import { beforeEach, describe, expect, test } from "vitest";

describe("<SettingsMenu/>", () => {
    beforeEach(() => {
        render(<SettingsMenu language="zh-cn" />);
    });

    test("has language selector", () => {
        expect(
            screen.getByRole("combobox", {
                name: getTranslation("zh-cn").selectLanguage,
            }),
        ).toBeInTheDocument();
    });
});
