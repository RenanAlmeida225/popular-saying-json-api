const Sayings = require('../models/Sayings.js');

module.exports = {
	async createSayings(req, res) {
		const { sayings, meaning, example } = req.body;

		// Validações
		if (!sayings) {
			return res.status(422).json({
				type: 'error',
				message: 'Popular sayings are required!',
			});
		}

		if (!meaning) {
			return res.status(422).json({
				type: 'error',
				message: 'Meaning is required!',
			});
		}

		if (!example) {
			return res.status(422).json({
				type: 'error',
				message: 'Example is required!',
			});
		}

		try {
			const saying = await Sayings.create({ sayings, meaning, example });

			return res.status(201).json({
				type: 'Success',
				message: 'Popular saying create successfully!',
				saying,
			});
		} catch (error) {
			return res.status(500).json({
				type: 'error',
				message: error,
			});
		}
	},
};
