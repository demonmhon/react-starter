# 1: Build to dist
FROM node:24-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --silent
COPY . ./
RUN npm run build

# 2: Production Environment
FROM nginx:1.31.1-alpine
RUN apk add --no-cache curl git grep
WORKDIR /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]