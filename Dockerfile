FROM node:12
WORKDIR /use/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "build/index.js" ]
