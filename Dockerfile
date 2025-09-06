# syntax=docker/dockerfile:1

FROM node:22.19

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .
