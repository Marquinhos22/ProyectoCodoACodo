const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadFiles');

const controller = require('../controllers/admin.controllers')

router.get('/',controller.admin);
router.get('/create',controller.create);
router.post('/create',upload.array('images',2),controller.createItem);
router.get('/edit/:id',controller.edit);
router.put('/edit/:id',(req, res)=> res.send('Esta es la vista para realizar'));
router.delete('/delete/:id',(req, res)=> res.send('Esta es la vista para eliminar un item'));

module.exports = router;