/**
 * @fileoverview This index.js is the main of the http server.
 * @package
 */

'use strict'
const app = require('./app')
const config = require('./config')
const mongoose = require('mongoose')

console.log(config)

mongoose.connect(config.db, (err, res) => {
  if (err) {
    return console.log(`Error al conectar a la base de datos: ${err}`)
  }

  console.log('Conexion a la base de datos establish')

  app.listen(config.port, () => {
    console.log(`API REST corriendo en http://localhost:${config.port}`)
  })
})
