FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
 
RUN npm install

RUN npm install -g nodemon

COPY . .

EXPOSE 5174

CMD ["npm", "run", "start"]