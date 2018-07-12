const express = require('express')
const productCtrl = require('../controllers/product')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()



/*PRODUCT */ 
api.get('/product', productCtrl.getProducts)
api.get('/product/:id', productCtrl.getProduct)
api.post('/product', productCtrl.saveProduct)
api.put('/product/:id', productCtrl.updateProduct)
api.delete('/product/:id', productCtrl.deleteProduct)

/*USER */ 
api.get('/user', userCtrl.getUsers) // getUsers
api.post('/signup', userCtrl.singUp) // register
api.post('/signin', userCtrl.singIn) // login


/*PRIVATE */ 
api.get('/private', auth,(req, res)=>{
    res.status(200).send({message: 'Access ok'})
})

module.exports = api
