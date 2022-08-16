# Node OM file structure demo

My attempt to make sense of a proper structure for [redis-om](https://www.npmjs.com/package/redis-om).

## The idea

Assuming the BE is built after [MDN's MVR(outer) approach](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes#overviews), this example uses a loosely coupled provider pattern.

1. There is a folder named `model`
2. Like with MongoDB, it includes one file for each Data Model (or Redis Entity)
3. The `redis.provider` consists of a single redis `Client`
4. This client requests (=fetches) repositories after it is initialized
5. The client and the repositories are then exported from the provider
6. The provider also exports a function to initialize indexes for searching

## The relevant structure

```
/
| - backend
|   | - src
|   |   | - models
|   |   |   | - address.model
|   |   |   | - user.model
|   |   |   | - redis.provider
|   | - package.json
```
