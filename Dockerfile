FROM node:19-alpine
WORKDIR /app
COPY /src/. ./
RUN npm install --quiet node-gyp -g &&\
  npm install --quiet && \
  npm i -g nodemon

CMD ["npm", "run-script", "run"]
#CMD ["nodemon", "--exec", "npm", "run-script", "run"]
