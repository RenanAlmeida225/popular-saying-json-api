const { DataTypes } = require('sequelize');
const sequelize = require('../db/conn.js');

const Sayings = sequelize.define('sayings', {
	sayings: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	meaning: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	example: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

module.exports = Sayings;
