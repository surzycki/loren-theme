FROM ruby:3.1.2-buster
#FROM node:16-stretch-slim

ENV APP_HOME /var/www
ENV HOSTNAME lorem-theme


# Install python 3
RUN apt-get update && apt-get install -y curl python build-essential wget git

# Install node
RUN curl -s https://deb.nodesource.com/setup_16.x | bash
RUN apt-get update && apt-get install -y nodejs
RUN npm install --global yarn

# Install shopify cli
RUN gem install shopify-cli

RUN mkdir -p $APP_HOME

WORKDIR $APP_HOME

