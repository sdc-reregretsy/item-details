FROM node:10.15.1

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3001

CMD [ "node", "server/index.js" ]


FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD password
ENV MYSQL_DATABASE regretsy_items
ENV MYSQL_USER root
ENV MYSQL_PASSWORD password

ADD database /schema.sql
