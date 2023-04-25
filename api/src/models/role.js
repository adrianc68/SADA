const {sequelize} = require("../config/db");
const {DataTypes} = require("sequelize");
const {Account} = require("./account");
const {RolePermission} = require("./rolePermission");
const {Permission} = require("./permission");

const Role = sequelize.define("Role", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING,
	},
	creation_date: {
		type: DataTypes.DATE
	},
	update_date: {
		type: DataTypes.DATE
	},
}, {
	freezeTableName: true,
	timestamps: false
});

module.exports = {Role}

