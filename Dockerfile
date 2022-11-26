FROM node:latest

ADD . .

RUN npm install

EXPOSE 8081

ENTRYPOINT [ "node","index.js" ]