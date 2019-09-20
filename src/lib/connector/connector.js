const axios = require('axios');

class Connector {
    constructor() {
        /**
         * 
         */
        this.connection = {
            host: 'http://127.0.0.1',
            port: '5984',
            user: 'root',
            password: null,
        };

        this.bindings = {
            select: [],
            from: [],
            join: [],
            where: [],
            orWhere: [],
            having: [],
            order: [],
            group: [],
            mix: [],
        };

        this.relationshipBindings = {
            select: [],
            from: [],
            join: [],
            where: [],
            orWhere: [],
            having: [],
            order: [],
            group: [],
            mix: [],
        };
    }

    async testConnection(callback) {
        await axios.get('http://127.0.0.1:5984/')
            .then(response => callback(response, null))
            .catch(error => callback(null, error));
    }

    async selectAll(_databaseName, callback) {
        await axios.get(`http://127.0.0.1:5984/${_databaseName}/_all_docs`)
            .then(response => callback(response, null))
            .catch(error => callback(null, error));
    }

    async insertDocument(_id, _document, _databaseName, callback) {
        await axios.put(`http://127.0.0.1:5984/${_databaseName}/${_id}`, _document)
            .then(response => callback(response, null))
            .catch(error => callback(null, error));
    }

    async deleteDocument(_id, _databaseName, callback) {
        await axios.delete(`http://127.0.0.1:5984/${_databaseName}/${_id}`)
            .then(response => callback(response, null))
            .catch(error => callback(null, error));
    }
}

module.exports = new Connector();