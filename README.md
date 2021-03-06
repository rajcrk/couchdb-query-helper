# couchdb-query-helper
[![npm version](https://img.shields.io/badge/npm-v1.1.2-green)](https://npmjs.org/package/couchdb-query-helper)
A module to help query couch DB in node applications
> **couchdb-query-helper is a library that can help you build query, schema, and control your database more easier.**

Presently can only be used on the NodeJS version 8 or higher.Supports CouchDb version 15.10 or higher.


## Installation
```sh
npm i couchdb-query-helper
```
## How to use
### Initializing the library
couchdb-query-helper module is itself a function which takes a configuration object.
```js
const queryHelper = require('couchdb-query-helper')
  .connection({
    host: 'localhost',
    protocol: 'http://',
    port: '5984',
    user: 'admin',
    pass: 'admin'
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
#### Select with condition (In Developement)
```array_of_key``` represents the key that you are searching for and ```array_of_values``` represents the values that the key should have.

```js
 queryHelper
    .query()
    .select(array_of_key, array_of_values, databaseName)
    .then((responseData) => console.log(responseData)) 
    .catch((err) => console.log(err));
```

#### Creating a new database
```js
    queryHelper
        .db()
        .createDatabase(dbName)
        .then((responseData) => console.log(responseData)) 
        .catch((err) => console.log(err));
```
#### Drop a database
```js
    queryHelper
        .db()
        .dropDatabase(dbName)
        .then((responseData) => console.log(responseData)) 
        .catch((err) => console.log(err));
```
#### Run your regular find with custom queries
You can use the regular JSON object for queries, to know more about the select option visit http://docs.couchdb.org/en/stable/api/database/find.html

```js
    queryHelper
        .query()
        .bareSelect(dbName, selectorSample)
        .then((responseData) => console.log(responseData)) 
        .catch((err) => console.log(err));
```

