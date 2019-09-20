const Connector = require('./connector/connector');


class Builder {
    /**
     * 
     * @param {*} config
     * @memberof Builder
     */
    connection(config) {
        Connector.connection = config;

        return this;
    }

    /**
     * Run database builder
     * 
     * @returns object
     * @memberof Builder
     */
    db() {
        const db = require('couchdb-query-helper/src/lib/delegate/db');
        return db;
    }

    insert(...args) {
        return new Promise((resolve, reject) => {

        })
    }

    query() {
        const query = require('./delegate/queryHelper');
        return query;
    }
}

module.exports = new Builder();