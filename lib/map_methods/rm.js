'use strict'

const idFromDocOrID = require('../util/id_from_doc_or_id')

/**
 * @private
 *
 * @param {KnexDBInstance} db - db instance
 * @param {bfx-hf-models.Model} model - initialized model instance
 * @param {object|string|number} docOrID - record to remove or its ID
 */
const rm = async (db, { mapKey }, docOrID) => {
  const id = idFromDocOrID(mapKey, docOrID)

  db.where({ mapKey: id }).del()
}

module.exports = rm
