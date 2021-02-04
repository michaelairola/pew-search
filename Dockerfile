# stage1 - build react app first 
FROM node:12.16.1-alpine3.9 as build
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build
ENTRYPOINT [ "npm", "run", "serve" ]

EXPOSE 8080
# WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
# COPY ./package.json /app/
# RUN yarn --silent
# COPY . /app
# RUN yarn build

# stage 2 - build the final image and copy the react build files
# FROM nginx:1.17.8-alpine
# COPY --from=build /app/build /usr/share/nginx/html
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx/nginx.conf /etc/nginx/conf.d
# EXPOSE 8000
# CMD
# CMD ["nginx", "-g", "daemon off;"]