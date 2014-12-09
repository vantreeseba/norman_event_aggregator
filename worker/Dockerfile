#DOCKER-VERSION 0.10.0

FROM ubuntu:14.04

# install nodejs and npm
RUN apt-get update && apt-get install -y nodejs npm git git-core
RUN ln -s /usr/bin/nodejs /usr/bin/node

ADD . /var/app/

CMD cd /var/app && npm install
CMD cd /var/app && npm start
