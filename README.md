## Bitfinex Honey Framwork *SQL Adapter for Node.JS

This is an adapter around **knex** for the Bitfinex Honey Framework. To use,
initialize an instance of the `bfx-hf-models` database with it as an adapter.

### Features

* Compatible with multiple flavours of SQL via `knex`
* High-scalability vs `bfx-hf-models-adapter-lowdb`
* Fully compatible with `bfx-hf-models` & the HF system (`bfx-hf-data-server`,
  `bfx-hf-algo-server`, `bfx-hf-algo`, etc)

### Installation

```bash
npm i --save bfx-hf-models-adapter-sql
```

### Quickstart & Example

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

### Docs

API documentation can be found in [`docs/reference.md`](docs/reference.md), and
examples in the [`examples`](examples) folder.

For information on the available model methods, check the documentation for
[bfx-hf-models](https://github.com/bitfinexcom/bfx-hf-models/tree/master/docs)

### Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
