const {sequelize} = require("../config/db");
const {DataTypes} = require("sequelize");
const {Business} = require("./business");
const {Inventory} = require("./inventory");
const {InventoryEntry} = require("./inventoryEntry");

const Supply = sequelize.define("Supply", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true
	},
	description: {
		type: DataTypes.STRING,
	},
	name: {
		type: DataTypes.STRING
	},

	id_business: {
		type: DataTypes.INTEGER
	}
}, {
	freezeTableName: true,
	timestamps: false
});

Supply.belongsToMany(Inventory, {through: InventoryEntry, foreignKey: "id_supply"});
Inventory.belongsToMany(Supply, {through: InventoryEntry, foreignKey: "id_inventory"});

module.exports = {Supply};

