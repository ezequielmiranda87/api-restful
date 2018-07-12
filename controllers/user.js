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
    email : req.body.email,
    displayName: req.body.displayName,
    password: req.body.password
  })

  user.save()
  .then((user)=>{
    res.status(200).send({message:'te has logueado correctamente', token:service.createToken(user)})
  })
  .catch((err)=>{
    res.status(500).send({err:err})
  })

}

// Controller user - metodo para loguin de usuario
// la funcion signUp, es un middleeare que se llama por medio de HTTP POST localhost://api/signIn
function singIn (req, res) {
const email = req.body.email;

User.find({email:email})
.then((user)=>{

})
.catch((err)=>{
  res.status(500).send({err:err})
})

}


function getUsers(req, res){
  User.find({})
  .then((users)=>{
    res.status(200).send({users:users})
  })
  .catch((err)=>{
    res.status(500).send({err:err})
  })
}


module.exports = {
  singUp,
  singIn,
  getUsers
}
