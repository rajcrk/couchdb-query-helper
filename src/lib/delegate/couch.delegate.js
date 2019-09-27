const Connector = require('../connector/connector');

class Couch {

    getUuids() {
        return new Promise((resolve, reject) => {
            Connector.getUuids((results, err) => {
                if (err) reject(err)
                else resolve(results)
            });
        });
    }
}

module.exports = new Couch();