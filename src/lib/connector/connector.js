const axios = require('axios');

class Connector {
    constructor() {
        this.connection = {
            host: '127.0.0.1',
            port: '5984',
            user: null,
            pass: null,
            protocol: 'http://'
        };
    }

    /**
     * Creates a database. Returns a promise which is
     * - resolved with no arguments
     * - rejected with `request` original error
     * @param {*} dbName 
     */
    async createDatabase(dbName, callback) {
        await axios.put(`${this.connection.protocol}${this.connection.user}:${this.connection.pass}@${this.connection.host}:${this.connection.port}/${dbName}`)
            .then(response => callback(response, null))
            .catch(error => callback(null, error));
    }

    /**
     * Function to check if database connected or not
     * @param {*} callback
     * @memberof Connector
     */
    async testConnection(callback) {
        await axios.get(`${this.connection.protocol}${this.connection.host}:${this.connection.port}`)
            .then(response => callback(response, null))
            .catch(error => callback(null, error));
    }

    /**
     * Select all documents from a database
     * @param {*} _databaseName 
     * @param {*} callback
     * @memberof Connector
     */
    async selectAll(_databaseName, callback) {
        await axios.get(`${this.connection.protocol}${this.connection.user}:${this.connection.pass}@${this.connection.host}:${this.connection.port}/${_databaseName}/_all_docs`)
            .then(response => callback(response, null))
            .catch(error => callback(null, error));
    }

    /**
     * insert a JSON document into a database
     * @param {*} _id 
     * @param {*} _document 
     * @param {*} _databaseName 
     * @param {*} callback
     * @memberof Connector
     */
    async insertDocument(_id, _document, _databaseName, callback) {
        await axios.put(`${this.connection.protocol}${this.connection.host}:${this.connection.port}/${_databaseName}/${_id}`, _document)
            .then(response => callback(response, null))
            .catch(error => callback(null, error));
    }

    /**
     * Delete a document by specifying the document id
     * @param {*} _id 
     * @param {*} _databaseName 
     * @param {*} callback 
     * @memberof Connector
     */
    async deleteDocument(_id, _databaseName, callback) {
        await axios.delete(`${this.connection.host}:${this.connection.port}/${_databaseName}/${_id}`)
            .then(response => callback(response, null))
            .catch(error => callback(null, error));
    }

    /**
     * Get the list of databases
     * @param {*} callback 
     * @memberof Connector
     */
    async showDatabases(callback) {
        await axios.get(`${this.connection.protocol}${this.connection.user}:${this.connection.pass}@${this.connection.host}:${this.connection.port}/_all_dbs`)
            .then(response => callback(response, null))
            .catch(error => callback(null, error));
    }

    /**
     * 
     * @param {*} selectorObject
     * @param {*} callback 
     * @memberof Connector
     */
    async selectWithCondition(selectorObject, _databaseName, callback) {
        await axios.post(`${this.connection.protocol}${this.connection.host}:${this.connection.port}/${_databaseName}/_find`, selectorObject)
            .then(response => callback(response, null))
            .catch(error => callback(null, error));
    }

    async dropDatabase(_db, callback) {
        await axios.delete(`${this.connection.protocol}${this.connection.user}:${this.connection.pass}@${this.connection.host}:${this.connection.port}/${_db}`)
        .then(response => callback(response, null))
        .catch(error => callback(null, error));
    }

    async getUuids(callback) {
        await axios.get(`${this.connection.protocol}${this.connection.user}:${this.connection.pass}@${this.connection.host}:${this.connection.port}/_uuids`)
        .then(response => callback(response, null))
        .catch(error => callback(null, error));
    }

    async bareSelect(_databaseName, _query, callback) {
        await axios.post(`${this.connection.protocol}${this.connection.host}:${this.connection.port}/${_databaseName}/_find`, _query)
            .then(response => callback(response, null))
            .catch(error => callback(null, error));
    }
}

module.exports = new Connector();