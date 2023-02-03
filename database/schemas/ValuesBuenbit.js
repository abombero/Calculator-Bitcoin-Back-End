const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ValuesSchemaBuenbit = Schema({
  precioVentaBuenbit : Number,
  precioCompraBuenbit : Number
})

module.exports = mongoose.model('ValuesSchemaBuenbit', ValuesSchemaBuenbit)