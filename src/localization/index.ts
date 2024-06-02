import astroConfig from "astro.config";
import en from "localization/en";
import zh_cn from "localization/zh-cn";

const languages = [zh_cn, en];
const languageCodes = languages.map((language) => language.code);

if (!astroConfig.i18n) {
    throw new Error("Missing i18n in Astro config");
}

if (
    !astroConfig.i18n.locales.every((value) =>
        languageCodes.includes(value as string),
    )
) {
    throw new Error("Translations missing for some locales in Astro config");
}

export { languageCodes, languages };
