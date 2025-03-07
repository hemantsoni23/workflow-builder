# Build Stage
FROM node:20-alpine AS builder

WORKDIR /src/app

# Only copy package.json to leverage Docker layer caching
COPY package.json ./
RUN npm install --frozen-lockfile

COPY . .

RUN npm run build

# ---- Release Stage ----
FROM node:20-alpine AS runner

WORKDIR /src/app

# Only copy built app & necessary files
COPY --from=builder /src/app/.next ./.next
COPY --from=builder /src/app/package.json .
COPY --from=builder /src/app/node_modules ./node_modules

# Serve the app
CMD ["node_modules/.bin/next", "start"]
