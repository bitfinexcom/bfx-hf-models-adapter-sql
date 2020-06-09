'use strict'

/**
 * @private
 *
 * @param {KnexDBInstance} db - db instance
 * @returns {object[]} records
 */
const getAll = async (db) => {
  return db.select('*')
}

module.exports = getAll
