# stage1 - build react app first 
FROM node:12.16.1-alpine3.9 as build
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build
ENTRYPOINT [ "npm", "run", "serve" ]

EXPOSE 8080