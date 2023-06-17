FROM node:alpine AS ui-build
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=ui-build /usr/src/app/dist/ /usr/share/nginx/html
EXPOSE 4200 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]