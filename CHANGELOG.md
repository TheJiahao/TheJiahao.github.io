# Changelog

## [2.7.0](https://github.com/TheJiahao/blog/compare/v2.6.0...v2.7.0) (2024-05-13)


### Features

* (callout): Align icon and title vertically ([75f6fc1](https://github.com/TheJiahao/blog/commit/75f6fc154a3727552d4b6c8b5c58766f909a3d56))
* **callout:** Add hover shadow ([851a8c4](https://github.com/TheJiahao/blog/commit/851a8c4142c1fef5abaae858a1305a9c10a89705))
* **callout:** Add top and bottom margin ([d661752](https://github.com/TheJiahao/blog/commit/d661752668de5465931bc0228976d99c0a7c4e58))
* **callout:** Make callout collapsible if needed ([c61d967](https://github.com/TheJiahao/blog/commit/c61d967f89726cb8e920faf150a6c4c7fbe69037))
* **callout:** Show clickable cursor on hover ([143f377](https://github.com/TheJiahao/blog/commit/143f3771d5f57102023565d02a10b7c27efb114e))
* **callout:** Use Bootstrap icons ([e869100](https://github.com/TheJiahao/blog/commit/e86910092bd2d6212091c4cad7cd5f1b49020243))
* **css:** Make SVG article-image responsive ([61198f4](https://github.com/TheJiahao/blog/commit/61198f4ff40ad5d562bef12fcbdc4fdebf7851f6))
* Implement callout shortcode ([4a47dcb](https://github.com/TheJiahao/blog/commit/4a47dcbeb9e50e5b0a039e9581896bfd5f2b295e))
* **post:** Add background for Edge logo ([dfbad54](https://github.com/TheJiahao/blog/commit/dfbad54c98f27d8e6ed45d09336022922272c931))
* **post:** Add draft for starship-setup ([7ad2488](https://github.com/TheJiahao/blog/commit/7ad248826a05814eb70f243e555d314501c1d722))
* **post:** Add gradient background to clangd cover ([db543a2](https://github.com/TheJiahao/blog/commit/db543a2580dc8b0c9a7570dadae9edab67723e1c))
* **post:** Add gradient Nushell cover ([f8251f8](https://github.com/TheJiahao/blog/commit/f8251f898217bd54be128b77859cc5151e42f931))
* **post:** Add logo for starship-setup ([244a5c5](https://github.com/TheJiahao/blog/commit/244a5c5f91381d793b8788ce4d168628dc9872b2))
* **post:** Add shell setup to starship-setup ([7c65e1b](https://github.com/TheJiahao/blog/commit/7c65e1b2638d2626db753401b9aa367a1112cc00))
* **post:** Add transitions to nushell-setup ([58929f5](https://github.com/TheJiahao/blog/commit/58929f5dcbe8a235b2a12c3bb68e67cf6dee77b4))
* **post:** Make Zim logo responsive ([93f789c](https://github.com/TheJiahao/blog/commit/93f789ce0ece7a00e9c6bb1b3dfd1a1a78082e18))
* **post:** Update starship-setup ([b50c92e](https://github.com/TheJiahao/blog/commit/b50c92e8e5757b90fe859f8c40dbecdaaae71295))
* **schema:** Add breadcrumbs ([062295c](https://github.com/TheJiahao/blog/commit/062295c79c214b981b70cb4cd5cbb404a3182e40))
* **schema:** Add inLanguage ([90d268d](https://github.com/TheJiahao/blog/commit/90d268db8187fd0438733060ee4831782be2f413))
* **schema:** Handle 404 page ([6a19418](https://github.com/TheJiahao/blog/commit/6a194186dc75a4435573dc2811c877c97b48887a))
* **schema:** Only add non-empty breadcrumbs ([3774c9f](https://github.com/TheJiahao/blog/commit/3774c9fbb5096764ffd2ab06845ef14f58549d69))
* **shortcode:** Add shortcode for links ([5e4271c](https://github.com/TheJiahao/blog/commit/5e4271c7040ff004c186915f5854c34bb71a2fa2))
* **site:** Add SVG avatar ([45f94a5](https://github.com/TheJiahao/blog/commit/45f94a51aefd2a6d89ab4c1ba242b7651007eb44))
* **video:** Add attributes control, loop, muted and disablepictureinpicture ([09ed5e1](https://github.com/TheJiahao/blog/commit/09ed5e10b411c8f8332a19444b70ce327d36de2b))


### Bug Fixes

* Add shape-rendering="geometricPrecision" to avatar ([4c8613b](https://github.com/TheJiahao/blog/commit/4c8613bbeb8269e1cee0585b2045d03b0702cc25))
* **ci:** Replace bun with pnpm ([da7aae5](https://github.com/TheJiahao/blog/commit/da7aae552272b7a28881c8336e22d974279de11c))
* **cover:** Adjust SVG covers ([41a4d30](https://github.com/TheJiahao/blog/commit/41a4d3041f9ffbe3823fbdaafc8a515281268a56))
* Drop-shadows not showing in Firefox ([ff6f5c8](https://github.com/TheJiahao/blog/commit/ff6f5c8c8b1515da9c16c83cfec107132fcddf4b))
* Footnotes inside callout not rendering ([199d2f9](https://github.com/TheJiahao/blog/commit/199d2f94f929d4e9ae8ba653fbe2243c43ab1fe4))
* Grammar ([9011c6d](https://github.com/TheJiahao/blog/commit/9011c6de0240800718035114e91aceaaebf27ffc))
* Incorrect link ([ab91b3a](https://github.com/TheJiahao/blog/commit/ab91b3af0ced699909422b68c87a88b19807c5b4))
* Incorrect markdownlint config ([8c37da7](https://github.com/TheJiahao/blog/commit/8c37da7498ac4cf41d33b069b8d66d19d3946549))
* Install pnpm with corepack ([185917b](https://github.com/TheJiahao/blog/commit/185917bd955d58f869c110c5427a4f634f50869e))
* Remove packageManager SHA from package.json ([8d6a18f](https://github.com/TheJiahao/blog/commit/8d6a18f2d47344a26273d07b47b233c5dcf9f7bc))
* Rename sitemapExclude back to Sitemap.Disable ([c09972f](https://github.com/TheJiahao/blog/commit/c09972f49cf024ad9aa947d5e3beb25b06a7529c))
* Respect noindex = false in frontmatter ([5ca1f0e](https://github.com/TheJiahao/blog/commit/5ca1f0ecc17abeb65b982c71d061c80203856276))
* **schema:** Add .Context to base ([caafd80](https://github.com/TheJiahao/blog/commit/caafd80b851d66722335c4d7bef76f3d52442f0f))
* **schema:** Change [@context](https://github.com/context) to https URL ([1f1b460](https://github.com/TheJiahao/blog/commit/1f1b4600cbfbe482c0a119bbfe24c30d4533a5a2))
* **schema:** Determine blog postings by section ([fd7e7c7](https://github.com/TheJiahao/blog/commit/fd7e7c79e6d05ff199a3ab2113ce53f97f788141))


### Performance Improvements

* Remove useless optimization ([32c3b77](https://github.com/TheJiahao/blog/commit/32c3b77795599889567a9e207920e61e057804c1))
* **schema:** Calculate base schema only once ([26706fe](https://github.com/TheJiahao/blog/commit/26706fed74c2e3994aace6f8dece2ead3914ba56))

## [2.6.0](https://github.com/TheJiahao/blog/compare/v2.5.0...v2.6.0) (2024-05-05)

### Features

* **accessibility:** Add alt for link images ([bb408a0](https://github.com/TheJiahao/blog/commit/bb408a02907124d429331b3541ee07f59171172e))
* Add link to Zim homepage in zsh-zim-setup ([c8108a8](https://github.com/TheJiahao/blog/commit/c8108a8f098ce7a3cb8b7a52bfb032f1aa1cfc8e))
* Hide reading time and license in about page ([cd044fb](https://github.com/TheJiahao/blog/commit/cd044fbef3920b545036f4e759a211375179d93b))
* **nushell-setup:** Add completion.tape ([38d5435](https://github.com/TheJiahao/blog/commit/38d5435cc6e9ae29676fb0096293d400ab541f22))
* **post:** Add initial Nushell config post ([9e7d807](https://github.com/TheJiahao/blog/commit/9e7d8072f52d0bed17917c54b1badd6d0c3c6573))
* **post:** Add nushell feature preview GIF and argc workaround ([32835ae](https://github.com/TheJiahao/blog/commit/32835aed2a0080fdc5c03f65b8b458044daae215))
* **post:** Add nushell sample config ([aefb5ce](https://github.com/TheJiahao/blog/commit/aefb5ce775fceec07bbb133574fcfe87a3348930))
* **post:** Mark nushell-setup not draft ([599ca3c](https://github.com/TheJiahao/blog/commit/599ca3ca2cbf01173d4efef7b92cf7da9c884889))
* **sidebar:** Add link to gravatar profile ([f105b8f](https://github.com/TheJiahao/blog/commit/f105b8f6e86427820393412069c5988a009892fe))

### Bug Fixes

* **ci:** Change prettierrc.mjs to .prettierrc ([930b724](https://github.com/TheJiahao/blog/commit/930b724c8f421a5278a637d007837f997afd0a38))
* **ci:** Run bun instead of yarn ([b903072](https://github.com/TheJiahao/blog/commit/b903072af512e87de6a8aa9e71162bf4ef236b4a))
* Ignore .zhlintrc from Prettier ([9c923f2](https://github.com/TheJiahao/blog/commit/9c923f23e834a3340418c17b331549cd878aa693))
* Ignore node_modules from markdownlint ([4203c67](https://github.com/TheJiahao/blog/commit/4203c679df5255acfb366486070f26709308ab8c))
* **post:** Nushell demovideo not published ([8022127](https://github.com/TheJiahao/blog/commit/8022127f8f71124985c4ec2459608d3cbbf30bd7))
* **post:** Replace nushell GIF with WebM video ([83bc53c](https://github.com/TheJiahao/blog/commit/83bc53c8aafecf1290bd8bf83e983da1c809d646))
* **post:** Update Nushell config format ([2230ad4](https://github.com/TheJiahao/blog/commit/2230ad464f63f5531004475e42d5f9e7f8809879))

### Performance Improvements

* **avatar:** Serve avatar as webp ([2c30235](https://github.com/TheJiahao/blog/commit/2c3023555d23ec0e2ffa54da490dfc888611d86b))
* Preconnect to JSDelivr ([704ff8d](https://github.com/TheJiahao/blog/commit/704ff8d8c2709f4bbe9b6ae91318fc4d234ca939))

## [2.5.0](https://github.com/TheJiahao/blog/compare/v2.4.0...v2.5.0) (2024-04-20)

### Features

* **categories:** Add icon for category 工具 ([a8d03c8](https://github.com/TheJiahao/blog/commit/a8d03c8a2bb70928bba429080130ba536b1628bb))
* Enable reading time ([af35023](https://github.com/TheJiahao/blog/commit/af35023420206826096b1010fbff8594526d2e4c))
* Make footer always in bottom of page ([19acd97](https://github.com/TheJiahao/blog/commit/19acd979b599a862337fd878eb45207296e312ff))
* **schema:** Add word count ([68b9e76](https://github.com/TheJiahao/blog/commit/68b9e76f2c7b6204ed22857d71af44083395c7c5))
* **theme:** Enable automatic color scheme switch ([984dbcb](https://github.com/TheJiahao/blog/commit/984dbcb8878ce27c1f981c9a248153769f9dbaa3))
* Update KaTex@v0.16.9 ([36e0f36](https://github.com/TheJiahao/blog/commit/36e0f3626d0a96527968ef52a110055fd85d7274))
* **url:** Use directory name as default slug ([4f28901](https://github.com/TheJiahao/blog/commit/4f28901b1aed38b59cffda089d49138a3e99c65e))

### Bug Fixes

* Checkout before indexing ([8f8731f](https://github.com/TheJiahao/blog/commit/8f8731f37bc919619b56081fb7d4dd7065968423))
* **dependabot:** Incorrect prefix config ([994fa39](https://github.com/TheJiahao/blog/commit/994fa3966b6786e453df20f5416331936280d8e7))
* **license:** Add icon license ([0df6272](https://github.com/TheJiahao/blog/commit/0df6272c7437d724fe5f2b70e6978edd1eef45db))
* Set up envs before indexing ([0a36eaa](https://github.com/TheJiahao/blog/commit/0a36eaa50f6ed966791b1b4d3c6e69e4a632e26c))
