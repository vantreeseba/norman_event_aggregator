#DOCKER-VERSION 0.10.0

FROM ubuntu:14.04


# make sure apt is up to date
RUN apt-get update

# install nodejs and npm
RUN apt-get install -y nodejs npm git git-core

ADD . /var/app/

RUN ["/bin/sh", "-c", "cd /var/app && npm install"]
CMD ["nodejs","/var/app/index.js"]
