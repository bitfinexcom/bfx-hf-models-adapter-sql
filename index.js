'use strict'

// Automatically parses decimals as floats
// NOTE: This results in a theoretical loss of precision
// TODO: Use BigNum
// https://github.com/tgriesser/knex/issues/927#issuecomment-291066092
const pg = require('pg')
const PG_DECIMAL_OID = 1700
const PG_BIGINT_OID = 20

pg.types.setTypeParser(PG_DECIMAL_OID, parseFloat)
pg.types.setTypeParser(PG_BIGINT_OID, 'text', parseInt)

const debug = require('debug')('bfx:hf:models:adapter-sql')
const _isEmpty = require('lodash/isEmpty')
const _isString = require('lodash/isString')
const _includes = require('lodash/includes')
const knex = require('knex')

const mapMethods = require('./lib/map_methods')
const genericMethods = require('./lib/generic_methods')
const collectionMethods = require('./lib/collection_methods')

const CLIENT_TYPES = ['pg', 'mysql', 'sqlite']

module.exports = ({
  clientType,
  connection
}) => {
  if (!_includes(CLIENT_TYPES, clientType)) {
    throw new Error([
      `unsupported client type: ${clientType}`,
      `must be one of ${CLIENT_TYPES.join(',')}`
    ].join(' '))
  }

  if (_isEmpty(connection)) {
    throw new Error('no connection params provided')
  }

  // NOTE: Don't log connection string for security
  debug('[%s] connecting...', clientType)

  const db = knex({
    client: clientType,
    acquireConnectionTimeout: 10 * 1000,
    connection,
    pool: {
      min: 2,
      max: 25,
    }
  })

  const dbInit = (model) => {
    const { path, name } = model

    if (!_isString(path) || _isEmpty(path)) {
      throw new Error(`model DB path not string or empty for model ${name}`)
    }

    const knexOnPath = db(path)

    knexOnPath._knex = db

    return knexOnPath
  }

  const close = db.destroy.bind(db)

  return {
    db,
    dbInit,
    close,
    mapMethods,
    genericMethods,
    collectionMethods,
    name: 'SQL'
  }
}
