const Sayings = require('../models/Sayings.js');

module.exports = {
	teste(req, res) {
		res.status(200).json({
			message: 'OK',
		});
	},
};
