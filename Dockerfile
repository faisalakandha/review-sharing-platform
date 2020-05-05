# Dockerfile for client

# Stage 1: Build react client
FROM node:10.16-alpine

# Working directory be app
WORKDIR /usr/app

# copy local files to app folder
COPY . .

# Install dependencies
RUN yarn install

EXPOSE 3030

CMD ["yarn","start"]