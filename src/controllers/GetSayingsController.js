const { Sequelize, Op } = require('sequelize');
const Sayings = require('../models/Sayings.js');

module.exports = class GetSayingsController {
	static async getRandomSaying(req, res) {
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
	}

	static async getIdSaying(req, res) {
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
		} catch (error) {
			return res.status(500).json({
				type: 'error',
				message: error,
			});
		}
	}

	static async getSearchSaying(req, res) {
		const query = req.params.query;

		try {
			const saying = await Sayings.findAll({
				where: {
					sayings: { [Op.like]: `%${query}%` },
				},
				attributes: { exclude: ['createdAt', 'updatedAt'] },
			});

			if (!saying.length) {
				return res.status(404).json({
					type: 'error',
					message: 'Popular sayings not found!',
				});
			}

			return res.status(200).json({
				saying,
			});
		} catch (error) {
			return res.status(500).json({
				type: 'error',
				message: error,
			});
		}
	}
};
