const router = require('express').Router();

// importa os controles dos ditados
const GetSayingsController = require('./controllers/GetSayingsController.js');
const SayingsContoller = require('./controllers/SayingsController.js');

router.route('/').get(GetSayingsController.getRandomSaying);
router.route('/:id').get(GetSayingsController.getIdSaying);
router.route('/search/:query').get(GetSayingsController.getSearchSaying);

router.route('/sayings').post(SayingsContoller.createSayings);
router
	.route('/sayings/:id')
	.put(SayingsContoller.updateSayings)
	.delete(SayingsContoller.deleteSayings);

module.exports = router;
