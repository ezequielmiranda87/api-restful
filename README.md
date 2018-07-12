# API - RESTful
Builindg API restful  with node.js 4.0 


# Getting started
* Clone thus repo ```https://github.com/ezequielmiranda87/api-restful```
* Install dependencies ```npm install```
* Install MongoDb Community Edition  and run it by executing ```mongod```
* Start the server: ```npm start```


#Code Overview

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

# Testing API
Test your API using 