# # Build local monorepo image
# docker build --no-cache -t  flowise .

# # Run image
# # docker run -d -p 3000:3000 flowise

# FROM node:20-alpine
# RUN apk add --update libc6-compat python3 make g++
# # needed for pdfjs-dist
# RUN apk add --no-cache build-base cairo-dev pango-dev

# # Install Chromium
# RUN apk add --no-cache chromium

# #install PNPM globaly
# RUN npm install -g pnpm

# ENV PUPPETEER_SKIP_DOWNLOAD=true
# ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# ENV NODE_OPTIONS=--max-old-space-size=8192

# WORKDIR /usr/src

# # Copy app source
# COPY . .

# RUN pnpm install

# RUN pnpm build

# EXPOSE 3000

# CMD [ "pnpm", "start" ]






# Use Node.js base image
FROM node:20-alpine

# Install required dependencies
RUN apk add --no-cache \
    libc6-compat python3 make g++ \
    build-base cairo-dev pango-dev \
    chromium

# Set environment variables
ENV PUPPETEER_SKIP_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser \
    NODE_OPTIONS=--max-old-space-size=8192

# Install PNPM globally
RUN npm install -g pnpm

ENV PUPPETEER_SKIP_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser \
    NODE_OPTIONS=--max-old-space-size=8192 \
    VITE_API_BASE_URL=/flowise \
    VITE_UI_BASE_URL=/flowise

WORKDIR /usr/src

# Copy source code and install dependencies
COPY . .
RUN pnpm install && pnpm build

# Expose port and define start command
EXPOSE 3000

CMD [ "pnpm", "start" ]
