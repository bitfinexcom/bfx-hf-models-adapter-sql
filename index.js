'use strict'

const HFDBSQLDBAdapter = require('./lib')

/**
 * This is an adapter around `knex` for the Bitfinex Honey Framework. To use,
 * initialize an instance of the {@link external:bfx-hf-models} database with
 * it as an adapter.
 *
 * @license Apache-2.0
 * @module bfx-hf-models-adapter-sql
 * @function
 * @param {object} config - configuration
 * @param {string} config.clientType - one of 'pg', 'mysql', 'sqlite'
 * @param {string} config.connection - connection string, i.e. PSQL URL with
 *   authentication query params
 * @returns {bfx-hf-models.DBAdapter} adapter
 *
 * @example
 * const HFDBSQLAdapter = require('bfx-hf-models-adapter-sql')
 * const { schema: HFDBBitfinexSchema } = require('bfx-hf-ext-plugin-bitfinex')
 * const HFDB = require('bfx-hf-models')
 *
 * const PSQL_CONNECTION = '...'
 *
 * const db = new HFDB({
 *   schema: HFDBBitfinexSchema,
 *   adapter: HFDBSQLAdapter({
 *     connection: PSQL_CONNECTION,
 *     clientType: 'pg'
 *   }),
 * })
 *
 * const { Candle } = db
 * const candles = await Candle.getAll()
 *
 * console.log(`read ${candles.length} candles`)
 */

/**
 * @external bfx-hf-models
 * @see https://github.com/bitfinexcom/bfx-hf-models
 */

module.exports = HFDBSQLDBAdapter
