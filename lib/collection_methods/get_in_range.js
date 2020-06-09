'use strict'

const whereQBuilder = require('../util/where_q_builder')

/**
 * @private
 *
 * @param {KnexDBInstance} db - db instance
 * @param {bfx-hf-models.Model} model - initialized model instance
 * @param {bfx-hf-models.DBAdapterCriteria[]} criteria - criteria
 * @param {object} range - range definition
 * @param {string} range.key - key name on records to be checked against
 *   start/end limits
 * @param {number} range.start - minimum value for `range.key`
 * @param {number} range.end - maximum value for `range.key`
 * @param {object} [sort] - sort parameters
 * @param {string} [sort.orderBy] - key to sort results by
 * @param {string} [sort.orderDirection] - `'desc'` for descending results,
 *   otherwise ascending.
 * @returns {object[]} records - matching records
 */
const getInRange = async (db, model, criteria, {
  key,
  start,
  end
}, { orderBy, orderDirection } = {}) => {
  let q = whereQBuilder(db, criteria)
    .andWhere(key, '>=', start)
    .andWhere(key, '<=', end)

  if (orderBy && orderDirection) {
    q = q.orderBy(orderBy, orderDirection)
  }

  return q.select('*')
}

module.exports = getInRange
