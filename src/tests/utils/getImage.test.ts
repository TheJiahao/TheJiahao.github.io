import { expect, test } from "vitest";
import getImage from "../../utils/getImage";

const IMAGE_DIRECTORY = "/src/assets/test";

test("finds existing raster image", async () => {
    const image = await getImage(`${IMAGE_DIRECTORY}/test-image.png`);

    expect(image).toBeDefined();
});

test("finds existing vector image", async () => {
    const image = await getImage(`${IMAGE_DIRECTORY}/test-image.svg`);

    expect(image).toBeDefined();
});


test("throws error for non-existing image", async () => {
    const image = "non-existing-image.png";

    await expect(getImage(image)).rejects.toThrowError(RegExp(`${image}`, "g"));
});
