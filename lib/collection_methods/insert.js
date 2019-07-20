'use strict'

module.exports = async (db, model, doc) => {
  return db
    .returning('*')
    .insert(doc)
}
