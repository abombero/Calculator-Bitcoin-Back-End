const alumno = require(`${process.env.PWD}/database/schemas/ValuesArgenbtc`);
const fetch = require("node-fetch");



getValue = async ( ) => { 
  try {
    const fetchApi = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    const data = await fetchApi.json()
    return data;
  }
  catch(error){
    console.log('Se produjo un error para buscar los valores ', error);
  }
}


/* createAlumno = body => {
  return new Promise((resolve, reject) => {
    const alumnoNvo = new alumno(body);
    alumnoNvo.save()
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject("Se produjo un error al crear un alumno " + error);
      });
  });
}; */

/* getAlumnoId = id => {
 return new Promise((resolve, reject) => {
    alumno
      .findById(id)
      .then(alumnoId => {
        resolve(alumnoId);
      })
      .catch(error => {
        reject("Se produjo un error al buscar a ese alumno " + error);
      });
  });
};

deleteAlumno = id => {
  return new Promise((resolve, reject) => {
    alumno.findByIdAndRemove(id)
    .then(response => {
      resolve('El alumno fue eliminado')
    })
    .catch(error => {
      reject("Se produjo un error al eliminar a ese alumno " + error);
    })
  })
}

updateAlumno = async (ob , body) => {
  
  console.log('SERVICE: ', body)
  console.log('*****OBJETO: ', ob)
  return new Promise((resolve, reject) => {
    alumno.findByIdAndUpdate(ob, body)
    .then(response => {
      resolve(response)
    })
    .catch(error => {
      reject("Se produjo un error al actualizar los datos del alumno " + error);
    })
  })
} */

module.exports = { getValue };
