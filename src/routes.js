const router = require('express').Router();

const GetSayingsController = require('./controllers/GetSayingsController.js');

// importa o controle dos ditados
const SayingsContoller = require('./controllers/SayingsController.js');

//router.route('/').get(GetSayingsController.getRandomSaying);
router.route('/:id').get(GetSayingsController.getIdSaying);

router.route('/create-saying').post(SayingsContoller.createSayings);

module.exports = router;