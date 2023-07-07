const {sequelize} = require("../config/db");
const {DataTypes} = require("sequelize");

const UserBusiness = sequelize.define("UserBusiness", {
	id_user: {
		type: DataTypes.INTEGER,
	},
	id_role: {
		type: DataTypes.INTEGER,
	},
	id_business: {
		type: DataTypes.INTEGER,
	}
}, {
	freezeTableName: true,
	timestamps: false,
});

module.exports = {UserBusiness};
