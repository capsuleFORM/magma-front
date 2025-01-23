FROM node:20.18.1-alpine3.21 as base

WORKDIR /app

COPY package.json ./

RUN npm ci --omit=dev --ignore-scripts

COPY . .

RUN npm run build

EXPOSE 3000
