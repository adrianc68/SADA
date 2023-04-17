const {sequelize} = require("../config/db");
const {DataTypes} = require("sequelize");

const Permission = sequelize.define("Permission", {
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
	timestamps: false
});

module.exports = {Permission};
