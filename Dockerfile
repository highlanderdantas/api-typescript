FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY ./dist .
ENV PORT=3050
ENV DB_URL="mongodb://db_mongo/db_portal"
ENV SECRET="338c59ac-455a-4331-ba76-dd4bb4a78861"
EXPOSE 3050
CMD ["npm", "run", "start:prod"]