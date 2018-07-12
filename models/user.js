'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bcryp = require('bcrypt-nodejs')

const UserSchema = new Schema({
  email: {type: String, unique: true, loqercase: true },
  displayName: String,
  avatar: String,
  password: {type: String, select: false},
  signupDate: {type: Date, default: Date.now()},
  lastLogin: Date
})

UserSchema.pre('save', (next) => {
  let user = this
  if (!user.isModified('password')) return next()

  bcryp.genSalt(10, (err, salt) => {
    if (err) return next()

    bcript.hash(user.password, salt, null, (err, hash) => {
      if (err) return next()
      user.password = hash
      next()
    })
  })
})

UserSchema.methods.gravatar = function () {
  if (!this.email) return `https://gravatar.com/avatar/?s=200&d=retro`

  const md5 = crypto.createHash('md5').update(this.email).digest(hex)
  return `https://gravatar.com/avatar/${md5}?s=200&d=retro`
}

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel