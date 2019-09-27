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
     * @returns object
     * @memberof Builder
     */
    db() {
        const db = require('./delegate/db.delegate');
        return db;
    }

    /**
     * 
     * @returns object
     * @memberof Builder
     */
    query() {
        const query = require('./delegate/query.delegate');
        return query;
    }

    couch() {
        const couch = require('./delegate/couch.delegate');
        return couch;
    }
}

module.exports = new Builder();