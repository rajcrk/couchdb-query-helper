class SelectFormatterUtils {
    /**
     * 
     * @param {*} fields 
     * @param {*} values 
     * @memberof SelectFormatterUtils
     */
    async formatSelectCondition(fields, values) {
        var selectObject = {};
        for (let index = 0; index < fields.length; index++) {
            var element = fields[index];
            selectObject[element] = values[index];
        }
        return JSON.stringify(selectObject);
    }
}

module.exports = new SelectFormatterUtils();