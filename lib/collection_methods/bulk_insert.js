'use strict'

/**
 * @private
 *
 * @param {KnexDBInstance} db - db instance
 * @param {bfx-hf-models.Model} model - initialized model instance
 * @param {object[]} docs - records to insert
 * @returns {object[]} insertedRecords
 */
const bulkInsert = async (db, model, docs) => {
  return db._knex.transaction(trx => {
    return db
      .insert(docs)
      .transacting(trx)
      .then(trx.commit)
      .catch(trx.rollback)
  })
}

module.exports = bulkInsert
