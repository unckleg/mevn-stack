FROM node:carbon

COPY ./docker-entrypoint.sh /entrypoint/

RUN npm install -g nodemon
RUN ["chmod", "+x", "entrypoint/docker-entrypoint.sh"]

# Copy or mount node app here
WORKDIR /data/

ARG SERVER_EXT_PORT
EXPOSE $SERVER_EXT_PORT

ENTRYPOINT ["./docker-entrypoint.sh"]

CMD ["node", "app"]
