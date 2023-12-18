const express = require('express');
const router = express.Router();

const controller = require('../controllers/auth.controllers')


router.get('/login',controller.auth);
router.get('/',controller.auth);
router.get('/register',controller.register);

router.get('/login',(req, res)=> res.send('Esta es la vista del login'));
router.post('/login',(req, res)=> res.send('Esta es la ruta que valida los datos del login'));
router.get('/register',(req, res)=> res.send('Esta es la vista del register'));
router.post('/register',(req, res)=> res.send('Esta es la ruta que crea un nuevo usuario'));
router.get('/logout',(req, res)=> res.send('Esta es la ruta que deslogea o cierra sesion'));


module.exports = router;