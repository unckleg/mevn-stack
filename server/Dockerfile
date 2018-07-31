FROM node:carbon

COPY ./docker/entrypoint.sh /entrypoint/

RUN npm install -g nodemon
RUN ["chmod", "+x", "entrypoint/entrypoint.sh"]

# Copy or mount node app here
WORKDIR /data/

EXPOSE $SERVER_EXT_PORT

ENTRYPOINT ["/entrypoint/entrypoint.sh"]

CMD ["node", "app"]