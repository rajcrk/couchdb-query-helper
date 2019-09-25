const axios = require('axios');

class Connector {
    constructor() {
        /**
         * The configuration database
         * @var {object}
         */
        this.connection = {
            host: '127.0.0.1',
            port: '5984',
            user: null,
            pass: null,
            protocol: 'http://'
        };
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
     * 
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
     * 
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
     * 
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
     * 
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
}

module.exports = new Connector();