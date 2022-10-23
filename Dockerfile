FROM node

ENV NODE_ENV=production

WORKDIR /app


COPY . .

CMD [ "node", "app/index.js"]