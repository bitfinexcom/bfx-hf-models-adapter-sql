'use strict'

/**
 * @private
 *
 * @param {KnexDBInstance} db - db instance
 * @returns {object} records - map of all records, key'ed by `mapKey`
 */
const getAll = async (db) => {
  return db.find()
}

module.exports = getAll
