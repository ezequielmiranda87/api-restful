const express = require('express')
const productCtrl = require('../controllers/product')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

/* PRODUCT */
api.get('/product', productCtrl.getProducts)
api.get('/product/:id', productCtrl.getProduct)
api.post('/product', auth, productCtrl.saveProduct)
api.put('/product/:id', auth,  productCtrl.updateProduct)
api.delete('/product/:id', auth,  productCtrl.deleteProduct)

/* USER */
api.get('/user', userCtrl.getUsers) // getUsers
api.post('/signup', userCtrl.singUp) // register
api.post('/signin', userCtrl.singIn) // login

/* PRIVATE */
api.get('/private', auth, (req, res) => {
  res.status(200).send({message: 'Tienes un token valido, puedes acceder a este recurso', user: req.user})
})

module.exports = api
