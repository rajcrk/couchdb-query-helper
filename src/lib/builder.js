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
        const db = require('./delegate/db');
        return db;
    }

    query() {
        const query = require('./delegate/queryHelper');
        return query;
    }
}

module.exports = new Builder();