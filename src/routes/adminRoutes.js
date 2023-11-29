const express = require('express');

//necesito el metodo router() de express
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Esta ruta devuelve la vista de Admin');
})

router.get('/create', (req, res) => {
    res.send('Esta ruta devuelve la vista de creacion de un user');
})

router.post('/create', (req, res) => {
    res.send('Esta ruta envia los datos para la creacion de un user');
})

router.get('/edit/:id', (req, res) => {
    res.send(`Esta ruta devuelve la vista del user ID: ${req.params.id}`);
})

router.put('/edit/:id', (req, res) => {
    res.send(`Esta ruta actualiza los datos del user ID: ${req.params.id}`);
})

router.delete('/delete/:id', (req, res) => {
    res.send(`Esta ruta elimina el user ID: ${req.params.id}`);
})

module.exports = router;