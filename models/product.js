'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Definiendo esquema Product
const ProductSchema = Schema({
  name: String,
  picture: String,
  price: {type: Number, default: 0},
  category: {type: String, enum: ['computers', 'phones', 'accesories']},
  decription: String
})

const ProductModel = mongoose.model('Product', ProductSchema)


// POPULATE
function createData(){

  ProductModel.create(
    {name:'', picture:'', price:'', category:'', description:''}
  )
}












module.exports = ProductModel
