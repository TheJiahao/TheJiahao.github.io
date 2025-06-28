# Installation

1. Install Node 22 LTS
1. Enable corepack

    ```sh
    sudo corepack enable
    ```

1. Install dependencies

    ```sh
    pnpm install
    ```

## Environment

Development is done in Ubuntu 24.04 LTS (WSL2) to be consistent with CI environment.

## Commands

- Start development server

    ```sh
    pnpm run dev
    ```

- Build to `/dist`

    ```sh
    pnpm run build
    ```

- Build and start preview server

    ```sh
    pnpm run preview
    ```
