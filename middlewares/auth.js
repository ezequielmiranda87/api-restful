'use strict'

const services = require('../services')

function isCustomer(req, res, next){

  next()
}

function isSeller(req, res, next){

  next()
}

function isManager(){

  next()
}

function isAdminstrator(req, res, next){
  const isAdmin = false
  if(isAdmin){
    console.log("is Adminstrator")
    next()
  }else{
    console.log("is not Adminstrator")
    res.status(403).send({message:'No tienes permiso para acceder'})
  }
  
}


function isAuth (req, res, next) {
  // Valida la existencia del token en el heeader
  // Format: Authorization: Bearer tokentokenttokentoken

  if (!req.headers.authorization) {
    return res.status(403).send({message: 'No tienes permiso para acceder'})
  }

  /* Si existe la cabecera desmenujamos el token en dos partes bearer and token */
  const authorization = req.headers.authorization.split(' ')
  const bearer = authorization[0]
  const token = authorization[1]

  // utilizamos el token para decodificarlo
  services.decodeToken(token)
    .then((response) => {
       req.user = response
      next()
    })
    .catch((respose) => {
      res.status(response.status).send(response.message)
      next()
    })

}

function init(type){
console.log('Inside de switch')
  switch (type) {
    case 'administrator':
      return isAdminstrator
    break;
    case 'manager':
      return isManager
    break;
    case 'seller':
      return isSeller
    break;
    case 'customer':
      return isCustomer
    break;
    case 'auth':
      return isAuth
    break;
    default:
    throw 'No existe el tipo'
      break;
  }


}

module.exports = init;
/*
module.exports = {
  isAdminstrator,
  isAuth,
  isCustomer,
  isManager,
  isSeller,
}
*/