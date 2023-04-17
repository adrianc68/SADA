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
	id_user: {
		type: DataTypes.INTEGER,
	}
}, {
	freezeTableName: true,
	timestamps: false
});

Role.belongsToMany(Permission, {through: RolePermission, foreignKey: "id_role"});
Permission.belongsToMany(Role, {through: RolePermission, foreignKey: "id_permission"});

module.exports = {Role}

