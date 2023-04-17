const {DataTypes} = require("sequelize");
const {sequelize} = require("../config/db");

const UserRole = sequelize.define("UserRole", {
	id_user: {
		type: DataTypes.INTEGER
	},
	id_role: {
		type: DataTypes.INTEGER
	}
}, {
	freezeTableName: true,
	timestamps: false
});

UserRole.removeAttribute("id");

module.exports = {UserRole};
