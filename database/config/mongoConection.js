const mongoose = require('mongoose')
const urlMongo =  'mongodb://localhost:27017/bitcoin';
const port = require(`${process.env.PWD}/config/port.js`)

const mongoConection = mongoose.connection.openUri(urlMongo , { useNewUrlParser: true, useUnifiedTopology: true } , function(err, res){
    if(err) return console.log(`Se produjo un error al intentar conectarse con la base de datos ${err}`)
    console.log(`Conectado con exito a la bd bitcoin en el puerto ${port}`)
})

module.exports = { mongoConection }