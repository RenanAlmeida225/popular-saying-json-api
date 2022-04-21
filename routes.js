const router = require('express').Router();

router.route('/teste').get((req, res) => {
	res.status(200).json({
		message: 'OK',
	});
});

module.exports = router;
