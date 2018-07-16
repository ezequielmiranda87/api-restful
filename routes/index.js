const express = require('express')
const productCtrl = require('../controllers/product')
const userCtrl = require('../controllers/user')
const Auth = require('../middlewares/auth')
const api = express.Router()


/* PRODUCT */
api.get('/product',  productCtrl.getProducts)
api.get('/product/:id',Auth('auth'), productCtrl.getProduct)
api.post('/product',  productCtrl.saveProduct)
api.put('/product/:id',   productCtrl.updateProduct)
api.delete('/product/:id',   productCtrl.deleteProduct)


/* USER */
api.get('/user', userCtrl.getUsers) // getUsers
api.get('/user/:id', userCtrl.getUser) 
api.post('/user', userCtrl.saveUser)
api.put('/user/:id', userCtrl.updateUser)
api.delete('/user/:id', userCtrl.deleteUser)


/*Auth*/ 
api.post('/signup', userCtrl.singUp) // register
api.post('/signin', userCtrl.singIn) // login

/* PRIVATE */
api.get('/private', Auth('auth'), (req, res) => {
  res.status(200).send({message: 'Tienes un token valido, puedes acceder a este recurso', user: req.user})
})

/* Admin*/

api.get('/admin', Auth('administrator'), (req, res)=>{
  res.status(200).send({message:'Acceso permitido'})
})



module.exports = api
