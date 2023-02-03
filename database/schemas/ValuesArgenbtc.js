const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ValuesSchemaArgenbtc = Schema({
  precioVentaAbtc : Number,
  precioCompraAbtc : Number
})

module.exports = mongoose.model('ValuesSchemaArgenbtc', ValuesSchemaArgenbtc)