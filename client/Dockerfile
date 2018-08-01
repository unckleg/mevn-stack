FROM node:carbon

COPY ./docker/entrypoint.sh /entrypoint/

RUN ["chmod", "+x", "entrypoint/entrypoint.sh"]

WORKDIR /data/

ARG CLIENT_EXT_PORT
EXPOSE $CLIENT_EXT_PORT

ENTRYPOINT ["/entrypoint/entrypoint.sh"]

CMD ["npm", "start"]
