/**
 * @fileoverview This index.js is the main of the http server.
 * @package
 */


'use strict'

const express = require('express')
const mongoose = require('mongoose')
const ProductCtrl = require('./controllers/product') 


const port = process.env.PORT || 3000;  // Set the port as enviroment var
const app = express();

// Adding body-parser Method as middleware of our app
app.use(express.urlencoded())
app.use(express.json())


app.get("/api/product", ProductCtrl.getProducts())
app.get('/api/product/:id', ProductCtrl.getProduct())
app.post('/api/product', ProductCtrl.saveProduct())
app.put('/api/product/:id', ProductCtrl.updateProduct())
app.delete('/api/product/:id', ProductCtrl.deleteProduct())



mongoose.connect('mongodb://localhost:27017/shop', (err, res)=>{
    if (err) {
        return console.log(`Error al conectar a la base de datos: ${err}`)
    }

    console.log('Conexion a la base de datos establish')
    
    app.listen(port, ()=>{
        console.log(`API REST corriendo en http://localhost:${port}`)
    })
})