'use strict'

const services = require('../services')

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
      // res.status(response.status).send(response.message)
      next()
    })

}

module.exports = isAuth
