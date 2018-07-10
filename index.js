/**
 * @fileoverview This index.js is the main of the http server.
 * @package
 */


'use strict'

const express = require('express')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000;  // Set the port as enviroment var

const app = express();

// Adding body-parser Method as middleware of our app
app.use(express.urlencoded())
app.use(express.json())


const products =[
    {id:1, name:'Producto', description:"awesome product", stock:2},
    {id:1, name:'Producto', description:"awesome product", stock:2},
    {id:1, name:'Producto', description:"awesome product", stock:2},
    {id:1, name:'Producto', description:"awesome product", stock:2},
    {id:1, name:'Producto', description:"awesome product", stock:2},
]

app.get("/api/product", (req, res)=>{
    res.status(200).send(products)
})

app.get('/api/product/:id', (req, res)=>{
    
})

app.post('/api/product', (req, res)=>{
    const product = req.body
    res.status(200).send(product)
})

app.put('/api/product/:id', (req, res)=>{

})

app.delete('/api/product/:id', (req, res)=>{

})

mongoose.connect('mongodb://localhost:27017/shop', (err, res)=>{
    if (err) {
        return console.log(`Error al conectar a la base de datos: ${err}`)
    }

    console.log('Conexion a la base de datos establish')
    
    app.listen(port, ()=>{
        console.log(`API REST corriendo en http://localhost:${port}`)
    })
})