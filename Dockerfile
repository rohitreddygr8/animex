# syntax=docker/dockerfile:1
FROM node:16-alpine
RUN apk add --no-cache python2 g++ make
WORKDIR /app
COPY . .
RUN node install --production
CMD ["node", "src/index.js"]
EXPOSE 3000
