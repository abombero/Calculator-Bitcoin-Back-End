// APP es el middleweare

/*
  API REST
  get - listar
  post - agregar
  put - reemplazar
  delete - borrar
  patch - actualizar
*/

const express = require('express');
const bodyParser = require('body-parser');
const controller = require('../../controller/controller')
const cors = require('cors')
const app = express()

.use(cors())
.use(bodyParser.urlencoded({extended: true})) // bodyParser sirve para poder mandar respuestas en formato json.
.use(bodyParser.json())

.get('/alumnos', controller.getValue) // express() tiene metodos como el get. Como express es un middleweare el controller va recibir un req y res.
.post('/alumnos', controller.postValue)

.use(function(error, req, res, next){
  console.log('se produjo un error', error);
})

.use(express.static(process.env.PWD + '/public')) // va a levantar el front! En el caso de React

module.exports = app