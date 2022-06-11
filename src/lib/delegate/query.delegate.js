const Connector = require('../connector/connector');
const selectFormatterUtils = require('../utils/selectorFormatter.utils');

class QueryHelper {

  /**
   * Query helper method to insert data to couch DB.
   * 
   * @param {*} _id 
   * @param {*} _document 
   * @param {*} _databaseName 
   * @memberof QueryHelper
   */
  async insert(_id, _document, _databaseName) {
    return new Promise((resolve, reject) => {
      Connector.insertDocument(_id, _document, _databaseName, (results, err) => {
        if (err) reject(err);
        else resolve(results.data);
      });
    });
  }

  /**
   * Query helper method to select data from couch DB.
   * 
   * @param {*} fields 
   * @param {*} values 
   * @param {*} _databaseName 
   */
  async select(fields, values, _databaseName) {
    return new Promise(async (resolve, reject) => {
      if (fields.length != values.length) { reject('The number of fields and values should be same !'); }
      let selectJSONCondition = await selectFormatterUtils.formatSelectCondition(fields, values);
      let selector = { "selector": JSON.parse(selectJSONCondition) };
      Connector.selectWithCondition(selector, _databaseName, (results, err) => {
        if (err) reject(err);
        else resolve(results.data);
      });
    });
  }

  /**
   * Query helper method to bare select data from courch DB.
   * 
   * @param {*} query 
   */
  async bareSelect(databaseName, query) {
    return new Promise(async (resolve, reject) => {
      Connector.bareSelect(databaseName, query, (results, err) => {
        if(err) reject(err);
        else resolve(results.data);
      })
    });
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
        if (err) reject(err)
        else resolve(results.data);
      });
    });
  }

  /**
   * Query helper to select all data from couch DB.
   * 
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