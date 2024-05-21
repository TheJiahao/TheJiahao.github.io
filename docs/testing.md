# Testing

[![codecov](https://codecov.io/gh/TheJiahao/TheJiahao.github.io/graph/badge.svg?token=M48R27ULMT)](https://codecov.io/gh/TheJiahao/TheJiahao.github.io)

Only components and utility functions will be covered in unit tests.
Layouts and pages are covered by E2E tests.

## Commands

Run unit tests:

```console
pnpm run test
```

Generate coverage report to `/coverage`:

```console
pnpm run coverage
```

Run e2e tests:

```console
pnpm run test:e2e
```

Run e2e test in Playwright UI:

```console
pnpm run playwright:open
```
