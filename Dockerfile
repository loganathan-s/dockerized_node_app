# specify the node base image with your desired version node:<version>
FROM node:latest

RUN npm i nodemon -g

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install --silent

# replace this with your application's default port
EXPOSE 3001
