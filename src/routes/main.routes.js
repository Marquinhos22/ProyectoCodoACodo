const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const controller = require('../controllers/main.controllers')

router.get('/', controller.home);
router.get('/home',controller.home)
router.get('/about',controller.about);
router.get('/faqs',controller.faqs);
router.get('/contact', controller.contact);


module.exports = router;