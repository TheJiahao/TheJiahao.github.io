FROM mcr.microsoft.com/playwright:v1.58.1-noble

RUN wget -qO- https://get.pnpm.io/install.sh | bash -

ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"