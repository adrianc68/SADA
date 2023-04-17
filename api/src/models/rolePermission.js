const {sequelize} = require("../config/db");
const {DataTypes} = require("sequelize");

const RolePermission = sequelize.define("RolePermission", {
	id_role: {
		type: DataTypes.INTEGER,
	},
	id_permission: {
		type: DataTypes.INTEGER,
	}
}, {
	freezeTableName: true,
	timestamps: false
});

module.exports = {RolePermission};
