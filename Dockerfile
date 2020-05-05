# Dockerfile for client

# Pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY client/package*.json ./
COPY client/package-lock.json ./
RUN npm install

# copy local files to app folder
COPY ./client ./
RUN ls
# start app
CMD ["npm","start"]