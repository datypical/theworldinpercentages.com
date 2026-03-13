# syntax=docker/dockerfile:1

# --- Base setup ---
FROM node:20-slim AS base
# Enable pnpm globally for all subsequent stages
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app

# --- Base deps (cached) ---
FROM base AS deps

# Only copy manifests first to maximize layer cache
COPY package.json pnpm-lock.yaml* ./

# Install with pnpm
RUN pnpm install --frozen-lockfile


# --- Development image (hot reload) ---
FROM base AS dev
ENV NODE_ENV=development

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Vite dev server
EXPOSE 5173
CMD ["pnpm","run","dev","--host","0.0.0.0","--port","5173"]


# --- Build ---
FROM base AS build
ENV NODE_ENV=production

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm run build


# --- Preview (production-like) ---
FROM base AS preview
ENV NODE_ENV=production

COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/build ./build
COPY --from=build /app/.svelte-kit ./.svelte-kit
COPY --from=build /app/vite.config.ts ./vite.config.ts
COPY --from=build /app/svelte.config.js ./svelte.config.js

# Vite preview server
EXPOSE 4173
CMD ["pnpm","run","preview","--host","0.0.0.0","--port","4173"]
