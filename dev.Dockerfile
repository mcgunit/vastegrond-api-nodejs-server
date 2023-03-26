FROM node:12-alpine3.11
WORKDIR /app
# copy package.json into the container at /app
COPY /app/package*.json ./
# install dependencies
RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install --quiet node-gyp -g &&\
  npm install --quiet && \
  apk del native-deps
CMD ["npm", "run-script", "start"]
