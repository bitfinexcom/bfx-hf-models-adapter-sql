'use strict'

const _isObject = require('lodash/isObject')

/**
 * Generates a key from a partial document, or returns the ID if provided
 *
 * @private
 *
 * @param {Function} mapKey - must generate a valid key from a partial document
 * @param {object|string|number} docOrID - record to update or its ID
 * @returns {string} ID
 */
const idFromDocOrID = (mapKey, docOrID) => {
  return _isObject(docOrID)
    ? mapKey(docOrID)
    : docOrID
}

module.exports = idFromDocOrID
