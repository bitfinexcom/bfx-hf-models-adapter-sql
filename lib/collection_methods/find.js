'use strict'

const whereQBuilder = require('../util/where_q_builder')

/**
 * NOTE: Only supports `.andWhere()`! For more complex operations, use
 * `customOperation()`
 *
 * @private
 *
 * @param {KnexDBInstance} db - db instance
 * @param {bfx-hf-models.Model} model - model instance
 * @param {bfx-hf-models.DBAdapterCriteria[]} criteria - array of criteria
 *   which must be met for a record to be included in the results
 * @returns {object[]} records - matching records
 */
const find = async (db, model, criteria = []) => {
  return whereQBuilder(db, criteria).select('*')
}

module.exports = find
