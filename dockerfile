# Base image for building the app
FROM node:lts-buster-slim AS base
RUN apt-get update && apt-get install -y libssl-dev ca-certificates
WORKDIR /app

# ENV NODE_ENV=production
ENV PORT=3002
ENV DATABASE_URL="postgres://default:HlJzr0v6eyGp@ep-calm-brook-757839.us-east-1.postgres.vercel-storage.com:5432/verceldb"

COPY package.json pnpm-lock.yaml ./

# Build stage for development
# FROM base as build
# RUN export NODE_ENV=production
RUN npm install -g pnpm
# COPY .env .env
COPY prisma prisma
COPY . .
RUN pnpm install
RUN pnpm run prisma:generate
RUN pnpm build

# # Build stage for production dependencies
# FROM base as prod-build
# RUN npm install -g pnpm
# COPY .env .env
# COPY prisma prisma
# RUN pnpm install
# COPY . .
# RUN pnpm run prisma:generate
# RUN cp -R node_modules prod_node_modules

# # Production stage
# FROM base as prod
# COPY --from=prod-build /app/prod_node_modules /app/node_modules
# COPY --from=build /app/.next /app/.next
# COPY --from=build /app/public /app/public
# COPY --from=build /app/prisma /app/prisma
EXPOSE 3002
CMD ["pnpm", "start"]
