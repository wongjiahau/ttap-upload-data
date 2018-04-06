FROM node
COPY './backend' '/backend'
WORKDIR '/backend'
RUN npm install
RUN apt-get update
RUN apt-get install git


CMD ["nodejs", "index.js"]