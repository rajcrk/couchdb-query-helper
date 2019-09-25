const Connector = require('../connector/connector');

class Db {
    /**
     * @returns promise
     * @memberof Db
     */
    testConnection() {
        return new Promise((resolve, reject) => {
            Connector.testConnection((results, err) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    }

    /**
    * Query to show all database with information
    * @returns promise
    * @memberof Db
    */
    showDatabases() {
        return new Promise((resolve, reject) => {
            Connector.showDatabases((results, err) => {
                if (err) reject(err);
                else resolve(results.data);
            })
        });
    }

}

module.exports = new Db();