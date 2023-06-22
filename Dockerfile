# Multi-stage build

# Install dependencies and build the app
FROM node:18-alpine AS ui-build
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build

# Copy the built app from the previous stage and run it
FROM nginx:alpine
COPY ./config/nginx/templates/ /etc/nginx/templates/
RUN ["touch", "/etc/nginx/conf.d/pod-name.conf"]
RUN ["rm", "-rf", "/usr/share/nginx/html/*"]
RUN ["rm", "/etc/nginx/conf.d/default.conf"]

COPY --from=ui-build /usr/src/app/dist/ /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["/bin/sh", "-c" , "envsubst < /etc/nginx/templates/pod-name.conf.template > /etc/nginx/conf.d/pod-name.conf && nginx -g 'daemon off;'"]