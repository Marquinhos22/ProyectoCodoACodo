const express = require('express');
const router = express.Router();

const controller = require('../controllers/admin.controllers')


router.get('/',controller.admin);
router.get('/create',controller.create);
router.get('/edit',controller.edit);


router.get('/create',(req, res)=> res.send('Esta es la vista para crear nuevo item'));
router.post('/create',(req, res)=> res.send('Esta es la ruta para agregar nuevo item '));
router.get('/edit/:id',(req, res)=> res.send('Esta es la vista para editar un item especifico'));
router.put('/edit/:id',(req, res)=> res.send('Esta es la vista para realizar'));
router.delete('/delete/:id',(req, res)=> res.send('Esta es la vista para eliminar un item'));

module.exports = router;