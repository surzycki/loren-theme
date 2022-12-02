# Loren Theme Shopify

## Prerequisites

- [Mutagen](https://mutagen.io/)
- [Docker](https://www.docker.com/)

## Getting Started

Development is connected to the development store [Piu Development](piu-test.myshopify.com).

All development should be done on the `development` branch as it is connected to the development store

When merged to master, the production store is updated

Commands:

```bash
# setup / start envionment (on host)
bin/start
```

```bash
# enter container
docker-compose exec dev bash

# start the server
bin/serve
```

Password for site

```
coffee
```

Reference theme [Dawn](https://github.com/Shopify/dawn)
