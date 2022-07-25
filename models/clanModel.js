const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clanSch = new Schema({
  foo: { type: String, required: true },
  bar: { type: String, required: true },
})

module.exports.schema = clanSch
module.exports.model = mongoose.model('Catalog', clanSch, 'catalogs')
