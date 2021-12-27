# Express Typescript Mongo

## Setup

Dev Dependencies

```bash
yarn add -D yarn add -D @types/body-parser @types/config @types/cors @types/express @types/node @types/pino @types/mongoose @types/jsonwebtoken @types/lodash @types/nanoid ts-node-dev typescript
```

App Dependencies

```bash
yarn add express cors mongoose jsonwebtoken pino dayjs lodash config zod pino-pretty
```

## Structure

1. src
    1. controllers - all handlers, file per feature
    2. services - business logic, file per feature
    3. models - DB model and hooks , file per feature
    4. schemas - schema for incoming data validation
    5. utils - common functionality across project
    6. middlewares - express middleware
    7. routes - express routing

## DB

To run locally

```bash
docker run -p 27017:27017 mongo
```
