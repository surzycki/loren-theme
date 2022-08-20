# Loren Theme Shopify

## Prerequisites

- [Mutagen](https://mutagen.io/)
- [Docker](https://www.docker.com/)

## Getting Started

```bash
# setup envionment
bin/start
mutagen project run setup
```

```bash
# start working
bin/start

# enter into theme directory 
cd loren-theme 
shopify theme serve

# start watching directory and build react components (in container)
yarn build:react
```
