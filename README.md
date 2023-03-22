# Codr Config Serivce

[![CodeQL](https://github.com/CodrJS/codr-core-config/actions/workflows/codeql.yml/badge.svg)](https://github.com/CodrJS/codr-core-config/actions/workflows/codeql.yml)
[![Docker Image CI](https://github.com/CodrJS/codr-core-config/actions/workflows/docker-image.yml/badge.svg)](https://github.com/CodrJS/codr-core-config/actions/workflows/docker-image.yml)

## Purpose

This microservice provides CRUD operations for all Configuration objects. Config object examples: `ProjectConfig`.

## Getting Started

To use this image, pull this image from the [Github Container Registry](https://github.com/CodrJS/codr-core-config/pkgs/container/codr-core-config).

```bash
docker pull ghcr.io/codrjs/codr-core-config:latest
```

## Kafka

Custom built consumer and producer classes can be imported from `@codrjs/kafka`.

### Producers

- [x] `codr.event.core.config` - used for audit and notification purposes.

### Consumers

- [ ] None

## Contributing

```bash
# Clone the repo
git clone git@github.com:CodrJS/codr-core-config.git

# Install yarn if you don't have it already
npm install -g yarn

# Install dependencies and build the code
yarn install
yarn build

# Building the docker image
yarn build:docker
```
