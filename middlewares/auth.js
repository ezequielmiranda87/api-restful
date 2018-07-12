'use strict'

const services = require('../services')

function isAuth(req, res, next){
    if(!req.header.authorization){
        return res.status(403).send({message: 'No tienes permiso para acceder'})
    }

    /* Si existe la cabecera desmenujamos el token */
    const authorization = req.header.authorization.split(" ")
    const bearer = authorization[0]
    const token  = authorization[1]

    services.decodeToken(token)
    .then((response)=>{
        req.user = response
        next()
    })
    .catch((respose)=>{
        res.status(response.status).send(response.message)
    })

    next()

}

module.exports = isAuth