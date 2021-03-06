# API - RESTful NodeJS + MongoDB + JWT(JSON Web Token)

Simple API for authentication, registratation and user Managment

# Getting started

* Clone thus repo ```https://github.com/ezequielmiranda87/api-restful```
* Install dependencies ```npm install```
* Install MongoDb Community Edition  and run it by executing ```mongod```
* Start the server: ```npm start```


# Code Overview

## Dependencies - Production
* expres.js
* mongoose
* crypto
* jwt-simple
* nodemon 


## Application Structure
```
root/
├── client/
│   ├── src/
│   ├── index.html
├── controllers/
│   ├── product.js
│   ├── user.js
├── middlewares/
│   ├── auth.js
├── models/
│   ├── product.js
│   ├── user.js
├── node_modules/
├── routes
│   ├── index.js
├── services
│   ├── index.js
```

## API RESTful 
Detail of the APIT RESTful resources

### Product

* GET    ``` /product/ ```
* GET    ``` /product/:id/ ```
* POST   ``` /product/ ```
* PUT    ``` /product/:id/ ```
* DELETE ``` /product/:id/ ```

### User
* GET    ``` /user/ ```

### Auth
* POST    ``` /signup/ ```
* POST    ``` /signin/ ```

# Testing API
Test your API using 
