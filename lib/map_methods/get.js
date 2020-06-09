'use strict'

const idFromDocOrID = require('../util/id_from_doc_or_id')

/**
 * @private
 *
 * @param {KnexDBInstance} db - db instance
 * @param {bfx-hf-models.Model} model - initialized model instance
 * @param {object|string|number} docOrID - record to fetch or its ID
 * @returns {object} record - matching record
 */
const get = async (db, { mapKey }, docOrID) => {
  const id = idFromDocOrID(mapKey, docOrID)

  return db.where({ mapKey: id }).first('*')
}

module.exports = get
