FROM node:14-alpine

WORKDIR /app

COPY ./ /app/

RUN npm install -g serve

RUN serve -s build

EXPOSE 3000