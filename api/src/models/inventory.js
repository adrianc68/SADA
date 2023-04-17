const {sequelize} = require("../config/db");
const {DataTypes} = require("sequelize");

const Inventory = sequelize.define("Inventory", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false
	},
	name: {
		type: DataTypes.STRING
	},
	id_business: {
		type: DataTypes.INTEGER
	},
}, {
	freezeTableName: true,
	timestamps: false,
});


module.exports = {Inventory};
