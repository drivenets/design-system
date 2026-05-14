FROM node:24-alpine

ARG DS_REPO=https://github.com/drivenets/design-system.git
ARG DS_BRANCH=main

RUN apk add --no-cache git
RUN corepack enable pnpm

WORKDIR /app
RUN git clone --depth 1 --branch ${DS_BRANCH} ${DS_REPO} .
RUN pnpm install --frozen-lockfile

EXPOSE 6006

HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD wget --spider -q http://localhost:6006/ || exit 1

WORKDIR /app/packages/design-system
CMD ["npx", "storybook", "dev", "--ci", "--port", "6006", "--host", "0.0.0.0"]
