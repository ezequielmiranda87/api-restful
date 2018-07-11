'use strict'
/**
 * @fileoverview This controller is responsible to the register and authentication
 * @package
 */

const mongoose = require('mongoose')
const User = require('../models/user')
const service = require('../services')

function singUp (req, res) {
  const user = new User({
    email: req.boody.email,
    displayName: req.body.displayName
  })
  user.save()
    .then(user => res.status(200).send({toke: service.createToken(user)}))
    .catch(err => res.status(500).send({message: `No se pudo crear el usuario ${err}`}))
}

function singIn (req, res) {

}

module.exports = {
  singUp,
  singIn
}
