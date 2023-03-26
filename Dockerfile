FROM node:12-alpine3.11
WORKDIR /app
COPY /app/. ./
RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install --quiet node-gyp -g &&\
  npm install --quiet && \
  apk del native-deps
CMD ["npm", "run-script", "run"]
