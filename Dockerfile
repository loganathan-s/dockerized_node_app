# specify the node base image with your desired version node:<version>
FROM node:latest

WORKDIR /usr/src/app

RUN mkdir -p /usr/src/app/node_modules

COPY package.json ./

COPY . .

RUN npm install
RUN npm install -g nodemon

# replace this with your application's default port
EXPOSE 3001


CMD [ "npm", "start" ]
