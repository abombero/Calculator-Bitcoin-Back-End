const alumnoService = require("../service/alumnoService");
const fs = require('fs');


async function getValue(req, res, next) {
  try {
    const currentPrice = await alumnoService.getValue();
    res.send(currentPrice);
  } catch (error) {
    console.log("Se produjo un error al traer todos los alumnos");
    next();
  }
}

async function postValue(req, res, next) {
 /*  try {
    const nuevoAlumno = await alumnoService.createAlumno(req.body);
    console.log('req.body', req.body);
    
    res.send(nuevoAlumno);
  } catch (error) {
    console.log("Se produjo un error al crear un nuevo alumno", error);
    next();
  } */
}



module.exports = { getValue, postValue };
