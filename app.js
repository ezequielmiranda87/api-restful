/**
 * @fileoverview This file app.js has the express app functionality
 * @package
 */

'use strict'
const express = require('express')
const app = express()
const api = require('./routes')
const cors = require('cors')
const morgan = require('morgan')

// Adding body-parser, cors Method as middleware of our app
app.use(express.urlencoded())
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.status(200).send({message: 'Respuesta ok', status: true})
})

app.use('/api', api)

module.exports = app
