const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');


const controller = require('../controllers/shop.controllers')


router.get('./', async (req, res)=>{
    const items = fs.readFileSync(path.resolve(__dirname, '../../data/items.json'));
    console.log(JSON.parse(items));
    res.render('shop')
})

router.get('/',controller.shop);
router.get('/item/:id', controller.item);
router.get('/carrito', controller.carrito);












router.get('/item/:id',(req, res)=> res.send('Esta es la vista del item selecciona'));
router.post('/item/:ide/add',(req, res)=> res.send('Esta es la ruta para agregar item'));
router.get('/cart',(req, res)=> res.send('Esta es la vista del Carrito'));
router.post('/cart',(req, res)=> res.send('Esta es la ruta para agregar item al carrito'));

module.exports = router;