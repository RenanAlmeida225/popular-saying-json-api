const router = require('express').Router();

const SayingsContoller = require('./controllers/SayingsController.js');

router.route('/create-saying').post(SayingsContoller.createSayings);

module.exports = router;
