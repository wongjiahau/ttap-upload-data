FROM node
COPY './backend' '/backend'
WORKDIR '/backend'
RUN npm install

CMD ["nodejs", "index.js"]