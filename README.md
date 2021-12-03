# Loren Theme Shopify

## Getting Started

```bash
# install all packages
yarn install

# start watching directory and build
yarn start

# start watching directory and build react components
yarn build:react

```

## Using mutagen

https://medium.com/@marickvantuil/speed-up-docker-for-mac-with-mutagen-14c2a2c9cba7

**Setup Sync**

```bash
# install mutagen
brew install mutagen-io/mutagen/mutagen

# start the daemon
mutagen daemon start

# list syncs
mutagen sync list

mutagen sync create \
 --name=loren-theme \
 /Users/stefan/Projects/piu/loren-theme docker://root@loren-theme-dev-1/var/www
```
