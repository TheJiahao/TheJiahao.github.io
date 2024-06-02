import type { AstroUserConfig } from "astro";

declare module "astro.config" {
    const astroConfig: AstroUserConfig;
    export = astroConfig;
}
