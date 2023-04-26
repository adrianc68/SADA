const {sequelize} = require("../config/db");
const {DataTypes} = require("sequelize");

const UserRole = sequelize.define("UserRole", {
	id_user: {
		type: DataTypes.INTEGER,
	},
	id_role: {
		type: DataTypes.INTEGER,
	}
}, {
	freezeTableName: true,
	timestamps: false
});

module.exports = {UserRole};
