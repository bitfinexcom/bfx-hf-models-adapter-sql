'use strict'

/**
 * @private
 *
 * @param {KnexDBInstance} db - db instance
 * @returns {number} nRemoved - number of removed records
 */
const rmAll = async (db) => {
  return db.del()
}

module.exports = rmAll
