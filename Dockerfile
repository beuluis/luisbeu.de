# develop build
FROM node:14.15-alpine

WORKDIR /app
ENV NODE_ENV develop
COPY package.json package-lock.json .env* /app/
RUN npm ci
COPY public /app/public
COPY src /app/src
CMD [ "npm", "start" ]
