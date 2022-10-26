FROM node

ENV NODE_ENV=production

WORKDIR /app


COPY . .

RUN yarn build

CMD [ "node", "output/index.js"]