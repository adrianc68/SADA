const {sequelize} = require("../config/db");
const {DataTypes} = require("sequelize");

const InventoryEntry = sequelize.define("InventoryEntry", {
	total_amount: {
		type: DataTypes.FLOAT
	},
	total_cost: {
		type: DataTypes.FLOAT
	},
	id_inventory: {
		type: DataTypes.INTEGER
	},
	id_supply: {
		type: DataTypes.INTEGER
	},
}, {
	freezeTableName: true,
	timestamps: false
});

module.exports = {InventoryEntry};
