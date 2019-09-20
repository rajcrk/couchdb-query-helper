const axios = require('axios');
const Connector = require('couchdb-query-helper/src/lib/connector/connector');

class QueryHelper {

  /**
   * 
   * @param {*} _id 
   * @param {*} _document 
   * @param {*} _databaseName 
   * @memberof QueryHelper
   */
  async insert(_id, _document, _databaseName)  {
    return new Promise((resolve, reject) => {
      Connector.insertDocument(_id, _document, _databaseName, (results, err) => {
        if (err) {
          console.log(err);
          reject(err)
        }
        else resolve(results.data);
      });
    });
  }

  async update() {

  }

  async select() {

  }

  /**
   * 
   * @param {*} _id 
   * @param {*} _databaseName 
   * @memberof QueryHelper
   */
  async delete(_id, _databaseName) {
    return new Promise((resolve, reject) => {
      Connector.deleteDocument(_id, _databaseName, (results, err) => {
        if (err) {
          console.log(err);
          reject(err)
        }
        else resolve(results.data);
      });
    });
  }

  /**
   * @memberof QueryHelper
   * @param {*} _databaseName 
   */
  async selectAll(_databaseName) {
    return new Promise((resolve, reject) => {
      Connector.selectAll(_databaseName, (results, err) => {
        if (err) reject(err);
        else resolve(results.data);
      });
    });
  }

}


module.exports = new QueryHelper();