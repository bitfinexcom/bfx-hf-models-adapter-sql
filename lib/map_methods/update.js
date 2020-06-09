'use strict'

const idFromDocOrID = require('../util/id_from_doc_or_id')

/**
 * @private
 *
 * @param {KnexDBInstance} db - db instance
 * @param {bfx-hf-models.Model} model - initialized model instance
 * @param {object|string|number} docOrID - record to update or its ID
 * @param {object} value - new data for the record
 * @returns {number} nUpdatedRows - number of updated rows (always 1)
 */
const update = async (db, { mapKey }, docOrID, value) => {
  const id = idFromDocOrID(mapKey, docOrID)

  return db.where({ mapKey: id }).update(value)
}

module.exports = update
