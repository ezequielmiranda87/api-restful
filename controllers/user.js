'use strict'
/**
 * @fileoverview This controller is responsible to the register and authentication
 * @package
 */

const mongoose = require('mongoose')
const User = require('../models/user')
const service = require('../services')



// Controller user - metodo para registro de usuario
// la funcion sigUp, es un midleware que se llama por medio de HTTP POST a la ruta localhost/api/signUp
function singUp (req, res) {
  const user = new User({
    email: req.boody.email,
    displayName: req.body.displayName
  })
  user.save()
    .then(user => res.status(200).send({toke: service.createToken(user)}))
    .catch(err => res.status(500).send({message: `No se pudo crear el usuario ${err}`}))
}

// Controller user - metodo para loguin de usuario
// la funcion signUp, es un middleeare que se llama por medio de HTTP POST localhost://api/signIn
function singIn (req, res) {
  const email = req.body.email;
  User.find({email:email})
  .then((user)=>{
    console.log(user)
    req.user = user
    res.status(200).send({
      message:'Te has logueado correctamente',
      token: service.createToken(user)
    })
  })
  .catch(err =>  res.status(500).send({message: err}))



}

module.exports = {
  singUp,
  singIn
}
