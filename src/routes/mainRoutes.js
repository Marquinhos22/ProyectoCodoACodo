const express = require('express');

//necesito el metodo router() de express
const router = express.Router();

//necesito los controllers
const mainControllers = require('../controllers/mainControllers');

router.get('/home', mainControllers.home);

router.get('/contact', mainControllers.contact);

router.get('/about', mainControllers.about);

router.get('/faqs', mainControllers.faqs);


module.exports = router;