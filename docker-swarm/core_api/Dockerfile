FROM node:16.14.2-alpine3.15 as build

WORKDIR /usr/core-api/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build && \
  npm prune --production

FROM node:16.14.2-alpine3.15

WORKDIR /usr/core-api/app

RUN apk add --no-cache curl

COPY --from=build /usr/core-api/app/dist ./dist
COPY --from=build /usr/core-api/app/node_modules ./node_modules

EXPOSE 3001

ENTRYPOINT [ "node", "./dist/server.js" ]