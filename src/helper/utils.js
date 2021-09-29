const isEmptyValue = input => {
    /**
     * Scope of empty value: falsy value (except for false and 0),
     * string with white space characters only, empty object, empty array
     */
    return (!input && input !== false && input !== 0) ||
      ((typeof input === 'string' || input instanceof String) && /^\s+$/.test(input)) ||
      (input instanceof Object && !Object.keys(input).length) ||
      (Array.isArray(input) && !input.length);
};

const removeEmptyValue = obj => {
    if (!(obj instanceof Object)) {
        return {};
    }
    Object.keys(obj).forEach(key => isEmptyValue(obj[key]) && delete obj[key]);
    return obj;
};

/**
 * NOTE: The array conversion logic is different from usual query string.
 * E.g. symbols=["BTCUSDT","BNBBTC"] instead of symbols[]=BTCUSDT&symbols[]=BNBBTC
 */
const stringifyKeyValuePair = ([key, value]) => {
    const valueString = Array.isArray(value) ? `["${value.join('","')}"]` : value;
    return `${key}=${encodeURIComponent(valueString)}`;
};

const buildQueryString = params => {
    if (!params) {
        return '' ;
    }
    return Object.entries(params)
      .map(stringifyKeyValuePair)
      .join('&');
};

const appendUpdatedId = (updateId, ask, bid) => {
    const insertUpdateId = (order) => {
        order[2] = updateId;
        return order;
    };
    return [ask, bid].map((side) => side.map(insertUpdateId));
};

module.exports = {
    buildQueryString,
    removeEmptyValue,
    isEmptyValue,
    appendUpdatedId
};

