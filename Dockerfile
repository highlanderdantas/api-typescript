FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY ./dist .
ENV PORT=3050
ENV DB_URL="mongodb://db_mongo/db_portal"
EXPOSE 3050
CMD ["npm", "run", "start:prod"]