FROM mcr.microsoft.com/playwright:v1.53.1-noble

RUN apt-get update -y
RUN apt-get install -y \
    git \
    curl \
    unzip

RUN curl -fsSL https://bun.sh/install | bash
ENV PATH=$PATH:/root/.bun/bin

WORKDIR /app
COPY package.json .
COPY bun.lockb .
COPY src src
COPY content content
COPY .git .git
COPY *.ts *.mjs *.toml *.json ./

RUN bun install --frozen-lockfile
RUN bun run build

ENV SHARD_INDEX=1
ENV SHARD_TOTAL=8
ENV CI=true

CMD bun test:e2e --shard=$SHARD_INDEX/$SHARD_TOTAL
