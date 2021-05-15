FROM node:14.16-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN apk --no-cache add curl
RUN yarn install

COPY . ./app

EXPOSE 3000
ENV HOST 0.0.0.0

CMD ["yarn", "dev"]
