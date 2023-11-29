const express = require('express');
const authControllers = require('../controllers/authControllers');

//necesito el metodo router() de express
const router = express.Router();

router.get('/login', authControllers.loginG)

router.post('/login', authControllers.loginP)

router.get('/register', authControllers.registerG)

router.post('/register', authControllers.registerP)

router.get('/logout', authControllers.logout)


module.exports = router;
