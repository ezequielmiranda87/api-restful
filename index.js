/**
 * @fileoverview This index.js is the main of the http server.
 * @package
 */


'use strict'

const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product')


const port = process.env.PORT || 3000;  // Set the port as enviroment var
const app = express();

// Adding body-parser Method as middleware of our app
app.use(express.urlencoded())
app.use(express.json())


app.get("/api/product", (req, res)=>{
    Product.find({})
    .then((products)=>{
        res.status(200).send(products)
    })
    .catch((err)=>{
        res.status(500).send({message:'no se encontro el recurso', err: err})
    })
})

app.get('/api/product/:id', (req, res)=>{
    
})

app.post('/api/product', (req, res)=>{
    console.log('POST /api/product')
    console.log(req.body)

    const product = new Product()
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description
    product.save((err, productStored)=>{
        if(err) res.status(500).send({message:`error al guardar en la base de datos ${err}`})
        res.status(200).send({product: productStored})
    })

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