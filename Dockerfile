FROM node
COPY './front-end' '/front-end'
COPY './backend' '/backend'
WORKDIR '/front-end'
RUN npm install
WORKDIR '/backend'
RUN npm install
COPY './launch-server.sh' '/launch-server.sh'
CMD ["/launch-server.sh"]
