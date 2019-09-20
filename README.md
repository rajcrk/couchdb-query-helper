# couchdb-query-helper
[![npm version](https://img.shields.io/badge/npm-v1.1.2-green)](https://npmjs.org/package/couchdb-query-helper)
A module to help query couch DB in node applications
> **couchdb-query-helper is a library that can help you build query, schema, and control your database more easier.**

Presently can only be used on the NodeJS version 8 or higher.Supports CouchDb version 15.10 or higher.


## Installation
```shell
npm i couchdb-query-helper
```
## How to use
### Initializing the library
couchdb-query-helper module is itself a function which takes a configuration object.
```js
const queryHelper = require('couchdb-query-helper')
  .connection({
    host: 'localhost',
    user: 'root',
    port: '5984'
  });
```
### Retrieving results
#### Retrieving All Rows From A Table
```js
queryHelper
    .query()
    .selectAll(tableName)
    .then((responseData) => console.log(responseData))
    .catch((err) => console.log(err));
```
#### Retrieving All Databases available
```js
queryHelper
    .db()
    .showDatabases()
    .then((responseData) => console.log(responseData))
    .catch((err) => console.log(err));
```
#### Inserting a document
```js
queryHelper
    .query()
    .insert(documentId, documentData, databaseName)
    .then((responseData) => console.log(responseData)) 
    .catch((err) => console.log(err));
```
#### Deleting a document
```js
queryHelper
    .query()
    .delete(documentId, databaseName)
    .then((responseData) => console.log(responseData)) 
    .catch((err) => console.log(err));
```
