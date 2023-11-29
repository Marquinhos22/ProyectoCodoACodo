const express = require('express');

//necesito el metodo router() de express
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Esta ruta devuelve la vista de Shop');
})

router.get('/item/:id', (req, res) => {
    res.send(`Esta ruta devuelve el ID: ${req.params.id} del producto funko`);
})

router.post('/item/:id/add', (req, res) => {
    res.send(`Esta ruta agrega el ID: ${req.params.id} del producto funko `);
})

router.get('/cart', (req, res) => {
    res.send('Esta ruta devuelve la vista de Carrito');
})

router.post('/cart', (req, res) => {
    res.send('Esta ruta envia los datos de Carrito');
})


module.exports = router;