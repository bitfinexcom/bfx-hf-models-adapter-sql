'use strict'

/**
 * Generates a query chaining multiple where/andWhere clauses.
 *
 * @private
 *
 * @param {KnexDBInstance} db - db instance
 * @param {bfx-hf-models.DBAdapterCriteria[]} criteria - array of conditions to
 *   apply to records in the collection; the first record meeting
 * @returns {object} q - query
 */
const whereQBuilder = (db, criteria = []) => {
  let q = db

  if (criteria.length === 1) {
    q = q.where(...criteria[0])
  } else {
    for (let i = 0; i < criteria.length; i += 1) {
      q = i === 0
        ? q.where(...criteria[i])
        : q.andWhere(...criteria[i])
    }
  }

  return q
}

module.exports = whereQBuilder
