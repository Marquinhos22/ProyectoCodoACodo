const express = require('express');
const shopControllers = require('../controllers/shopControllers');

//necesito el metodo router() de express
const router = express.Router();

router.get('/', shopControllers.shop)

router.get('/item/:id', shopControllers.itemID )

router.post('/item/:id/add', shopControllers.itemIDAdd )

router.get('/cart', shopControllers.cartG)

router.post('/cart', shopControllers.cartP)


module.exports = router;
