const router = require('express').Router();

const SayingsContoller = require('./controllers/SayingsController.js');

router.route('/teste').get(SayingsContoller.teste);

module.exports = router;
