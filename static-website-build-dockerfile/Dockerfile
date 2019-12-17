FROM node:10 as builder

WORKDIR /app

COPY . .

RUN npm install && \
    npm run build