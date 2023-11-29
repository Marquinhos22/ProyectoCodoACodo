const express = require('express');
const adminControllers = require('../controllers/adminControllers');

//necesito el metodo router() de express
const router = express.Router();

router.get('/', adminControllers.admin)

router.get('/create', adminControllers.createG)

router.post('/create', adminControllers.createP)

router.get('/edit/:id', adminControllers.editIDG)

router.put('/edit/:id', adminControllers.editIDPU)

router.delete('/delete/:id', adminControllers.deleteID)

module.exports = router;
