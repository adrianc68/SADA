const {sequelize} = require("../config/db");
const {DataTypes} = require("sequelize");

const Business = sequelize.define("Business", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING
	},
	description: {
		type: DataTypes.STRING
	}
}, {
	freezeTableName: true,
	timestamps: false,
});

module.exports = { Business };
