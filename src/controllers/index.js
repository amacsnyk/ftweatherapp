const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const home = require('./home');
const error = require('./error');
const weather = require('./weather')


router.use(bodyParser.urlencoded({ extended: true }));
router.get('/', home.get);
router.get('/weather/:location', weather.get)
router.post('/weather', weather.post);
router.use(error.client);
router.use(error.server);

module.exports = router;