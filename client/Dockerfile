FROM node:carbon

COPY ./docker-entrypoint.sh /entrypoint/

RUN ["chmod", "+x", "entrypoint/docker-entrypoint.sh"]

WORKDIR /data/

ARG CLIENT_EXT_PORT
EXPOSE $CLIENT_EXT_PORT

ENTRYPOINT ["./docker-entrypoint.sh"]

CMD ["npm", "start"]
