import astroConfig from "astro.config";

if (!astroConfig.i18n) {
    throw new Error("Missing i18n in Astro config");
}

const DEFAULT_LANGUAGE = astroConfig.i18n.defaultLocale;

export { DEFAULT_LANGUAGE };
