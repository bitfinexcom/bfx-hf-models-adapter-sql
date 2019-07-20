'use strict'

const idFromDocOrID = require('../util/id_from_doc_or_id')

module.exports = async (db, { mapKey }, value) => {
  const id = idFromDocOrID(mapKey, value)
  const existingDoc = await db.where({ mapKey: id }).first('*')

  if (existingDoc) {
    await db.where({ mapKey: id }).update(value)
  } else {
    await db.insert({
      ...value,
      mapKey: id
    })
  }
}
