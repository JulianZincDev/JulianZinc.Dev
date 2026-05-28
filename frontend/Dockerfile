FROM node:22-alpine AS build-frontend

WORKDIR /app
COPY . .
RUN npm install

RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build-frontend /app/dist .

EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]