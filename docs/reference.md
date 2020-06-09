<a name="bfx-hf-models-adapter-sql"></a>

## bfx-hf-models-adapter-sql(config) ⇒ <code>bfx-hf-models.DBAdapter</code>
This is an adapter around `knex` for the Bitfinex Honey Framework. To use,
initialize an instance of the [bfx-hf-models](https://github.com/bitfinexcom/bfx-hf-models) database with
it as an adapter.

**Kind**: global function  
**Returns**: <code>bfx-hf-models.DBAdapter</code> - adapter  
**License**: Apache-2.0  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>object</code> | configuration |
| config.clientType | <code>string</code> | one of 'pg', 'mysql', 'sqlite' |
| config.connection | <code>string</code> | connection string, i.e. PSQL URL with   authentication query params |

**Example**  
```js
const HFDBSQLAdapter = require('bfx-hf-models-adapter-sql')
const { schema: HFDBBitfinexSchema } = require('bfx-hf-ext-plugin-bitfinex')
const HFDB = require('bfx-hf-models')

const PSQL_CONNECTION = '...'

const db = new HFDB({
  schema: HFDBBitfinexSchema,
  adapter: HFDBSQLAdapter({
    connection: PSQL_CONNECTION,
    clientType: 'pg'
  }),
})

const { Candle } = db
const candles = await Candle.getAll()

console.log(`read ${candles.length} candles`)
```
