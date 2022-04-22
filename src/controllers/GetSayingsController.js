const { Sequelize } = require('sequelize');
const Sayings = require('../models/Sayings.js');

module.exports = {
	async getRandomSaying(req, res) {
		try {
			const saying = await Sayings.findOne({
				order: Sequelize.literal('rand()'),
				attributes: { exclude: ['createdAt', 'updatedAt'] },
			});

			return res.status(200).json({
				saying,
			});
		} catch (error) {
			return res.status(500).json({
				type: 'error',
				message: error,
			});
		}
	},

	async getIdSaying(req, res) {
		const id = req.params.id;

		try {
			const saying = await Sayings.findByPk(id, {
				attributes: { exclude: ['createdAt', 'updatedAt'] },
			});
			if (!saying) {
				return res.status(404).json({
					type: 'error',
					message: 'Popular sayings not found!',
				});
			}

			return res.status(200).json({
				saying,
			});
		} catch (error) {}
	},
};
