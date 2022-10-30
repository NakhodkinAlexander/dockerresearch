FROM node

ENV NODE_ENV=production

WORKDIR /back-end


COPY . .

RUN yarn build

CMD [ "node", "output/index.js"]