/**
 * @fileoverview This file app.js has the express app functionality
 * @package
 */

'use strict'
const express = require('express')
const app = express()
const api = require('./routes')
const crypto = require('crypto')
const cors = require("cors")


app.use(cors())

// Adding body-parser Method as middleware of our app
app.use(express.urlencoded())
app.use(express.json())
app.use('/api', api)
app.get("/", (req, res)=>{
    res.status(200).send({message:"Respuesta ok", status: true})
})

module.exports = app
