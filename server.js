const http = require('http') // modulo que ya viene con node.
const app = require(`${process.env.PWD}/app/v1/api`) // app es una funcion, la ejecuto aca y se la mando al createServer
const port = require(`${process.env.PWD}/config/port`)
const mongoConection = require(`${process.env.PWD}/database/config/mongoConection.js`)

http
  .createServer(app)
  .on('error' , function(error){
      switch (error.code){
          case 'EADDRINUSE':
          console.log('Puerto en uso')
          break;
          case 'EACCES':
          console.log('Error de permisos')
          break;
          default:
          throw error;
      }
    })
  .listen(port)

