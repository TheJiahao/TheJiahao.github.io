# Testing

[![codecov](https://codecov.io/gh/TheJiahao/TheJiahao.github.io/graph/badge.svg?token=M48R27ULMT)](https://codecov.io/gh/TheJiahao/TheJiahao.github.io)

Only components and utility functions will be covered in unit tests.
Wrapper functions of third-party programs/packages are generally not tested.
Astro components will be tested when [experimental APIs](https://docs.astro.build/en/reference/container-reference/) become stable.
Layouts and pages are covered by E2E tests.

## Commands

Run unit tests:

```sh
pnpm run test
```

Generate coverage report to `/coverage`:

```sh
pnpm run coverage
```

Run e2e tests:

```sh
pnpm run test:e2e
```

Run e2e test in Playwright UI:

```sh
pnpm run playwright:open
```
