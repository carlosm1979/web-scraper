# FROM node:12-alpine
# RUN npm install -g http-server
# WORKDIR /app
# COPY my-project/package.json ./
# RUN npm install
# COPY my-project/ .
# RUN npm run build
# EXPOSE 8081
# CMD [ "http-server", "dist -p 8081" ]

FROM node:12-alpine
WORKDIR /app
COPY package.json .
RUN npm install --quiet
