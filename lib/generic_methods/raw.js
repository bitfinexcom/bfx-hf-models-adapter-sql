'use strict'

/**
 * @private
 *
 * @param {KnexDBInstance} db - db instance
 * @param {bfx-hf-models.Model} model - initialized model instance
 * @param {Function} cb - called with `(db, model)`, must return a promise
 * @returns {Promise} p - as returned by the callback `cb`
 */
const raw = async (db, model, cb) => {
  return cb(db, model)
}

module.exports = raw
