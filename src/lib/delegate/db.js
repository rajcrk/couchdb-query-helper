const Connector = require('../connector/connector');
const axios = require('axios');

class Db {
    /**
     * @returns promise
     * @memberof Db
     */
    testConnection() {
        return new Promise((resolve, reject) => {
            Connector.testConnection((results, err) => {
                if (err) reject(err);
                else resolve(results.data);
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
            axios.get('http://127.0.0.1:5984/_all_dbs')
                .then(response => resolve(response))
                .catch(error => reject(error));
        });
    }
    
}

module.exports = new Db();