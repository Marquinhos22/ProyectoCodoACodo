const express = require('express');

//necesito el metodo router() de express
const router = express.Router();

router.get('/login', (req, res) => {
    res.send('Esta ruta devuelve la vista de Login');
})

router.post('/login', (req, res) => {
    res.send('Esta envia datos para el logueo');
})

router.get('/register', (req, res) => {
    res.send('Esta ruta devuelve la vista de Registro a la page');
})

router.post('/register', (req, res) => {
    res.send('Esta envia datos para el registro a la page');
})

router.get('/logout', (req, res) => {
    res.send('Esta ruta devuelve la vista de deslogueo');
})


module.exports = router;