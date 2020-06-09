'use strict'

/**
 * @private
 *
 * @param {KnexDBInstance} db - db instance
 * @param {bfx-hf-models.Model} model - initialized model instance
 * @param {object} doc - record to be inserted
 * @returns {object} record - inserted record data
 */
const insert = async (db, model, doc) => {
  return db
    .returning('*')
    .insert(doc)
}

module.exports = insert
