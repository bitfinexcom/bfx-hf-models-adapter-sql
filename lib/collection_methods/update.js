'use strict'

const whereQBuilder = require('../util/where_q_builder')

/**
 * NOTE: Only supports `.andWhere()`! For more complex operations, use
 * `customOperation()`
 *
 * @private
 *
 * @param {KnexDBInstance} db - db instance
 * @param {bfx-hf-models.Model} model - initialized model instance
 * @param {bfx-hf-models.DBAdapterCriteria[]} criteria - array of criteria to
 *   be met for a record to be updated
 * @param {object} data - data to saved on matching records; partial update
 * @returns {number} nModified - number of modified records
 */
const update = async (db, model, criteria = [], data = {}) => {
  return whereQBuilder(db, criteria)
    .update(data)
    .select('*')
}

module.exports = update
