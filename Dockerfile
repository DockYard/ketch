FROM node:lts-alpine

LABEL maintainer="Benjamin Rosas <benjamin.rosas@dockyard.com"

WORKDIR /app

RUN apk update

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

CMD ["npm", "start"]
