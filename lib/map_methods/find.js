'use strict'

const whereQBuilder = require('../util/where_q_builder')

module.exports = async (db, model, criteria) => {
  return whereQBuilder(db, criteria).select('*')
}
