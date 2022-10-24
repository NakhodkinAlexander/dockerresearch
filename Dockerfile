FROM node

ENV NODE_ENV=production

WORKDIR /app


COPY . .

CMD [ "node", "output/index.js"]