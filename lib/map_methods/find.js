'use strict'

const whereQBuilder = require('../util/where_q_builder')

/**
 * @private
 *
 * @param {KnexDBInstance} db - db instance
 * @param {bfx-hf-models.Model} model - initialized model instance
 * @param {bfx-hf-models.DBAdapterCriteria[]} criteria - array of conditions to
 *   apply to records in the collection; the first record meeting all
 *   conditions is returned as the "found" record.
 * @returns {object[]} records - array of records matching the provided
 *   criteria
 */
const find = async (db, model, criteria) => {
  return whereQBuilder(db, criteria).select('*')
}

module.exports = find
