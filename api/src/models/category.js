const {sequelize} = require("../config/db");
const {DataTypes} = require("sequelize");
const {Business} = require("./business");
const {MeasurementUnitType} = require("./types/measurementUnitType");

const Category = sequelize.define("Category", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true
	},
	category: {
		type: DataTypes.STRING,
	},
}, {
	freezeTableName: true,
	timestamps: false
});

module.exports = {Category};


