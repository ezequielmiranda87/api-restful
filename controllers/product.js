'use strict'
const Product = require('../models/product')

function getProduct (req, res) {
  const productId = req.params.id
  Product.findById(productId)
    .then((product) => {
      res.status(200).send({product})
    })
    .catch((err) => {
      res.status(500).send({message: 'Error al intentar recuperar el recurso', err: err})
    })
}

function getProducts (req, res) {
  Product.find({})
    .then((products) => {
      res.status(200).send({products})
    })
    .catch((err) => {
      res.status(500).send({message: 'Error al intentar recuperar el recurso', err: err})
    })
}

function updateProduct (req, res) {
  const productId = req.params.id
  const productBody = req.body

  Product.findByIdAndUpdate(productId, productBody)
    .then((productUpdated) => {
      res.status(200).send({product: productUpdated})
    })
    .catch((err) => {
      res.status(500).send({message: `error al actualizar en la base de datos ${err}`})
    })
}

function saveProduct (req, res) {
  console.log('POST /api/product')
  console.log(req.body)

  const product = new Product()
  product.name = req.body.name
  product.picture = req.body.picture
  product.price = req.body.price
  product.category = req.body.category
  product.description = req.body.description
  product.save()
    .then((productStored) => {
      res.status(200).send({product: productStored})
    }).catch((err) => {
      res.status(500).send({message: `error al guardar en la base de datos ${err}`})
    })
}

function deleteProduct (req, res) {
  const productId = req.params.id
  Product.findById(productId)
    .then((product) => {
      product.remove()
        .then((product) => {
          res.status(200).send({message: 'Producto eliminado'})
        })
    }).catch((err) => {
      res.status(500).send({message: `error al eliminar el producto ${err}`})
    })
}

module.exports = {
  getProduct,
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct
}
