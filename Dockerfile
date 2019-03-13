# specify the node base image with your desired version node:<version>
FROM node:latest

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

# replace this with your application's default port
EXPOSE 3001

CMD [ "npm", "start" ]
