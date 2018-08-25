const express = require('express');
const router = express.Router();

// import controllers

const home = require('./home');
const error = require('./error');

// add routes

router.get('/', home.get);
router.use(error.client);
router.use(error.server);

module.exports = router;