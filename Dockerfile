FROM node:16-stretch-slim

ENV APP_HOME /var/www
ENV HOSTNAME lorem-theme


# Install python 3
RUN apt-get update && apt-get install -y python build-essential

RUN mkdir -p $APP_HOME

WORKDIR $APP_HOME

