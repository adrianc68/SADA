const {sequelize} = require("../config/db");
const {DataTypes} = require("sequelize");
const {AccountStatusType} = require("./types/accountStateType");

const Account = sequelize.define("Account", {
	id_user: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	password: {
		type: DataTypes.STRING,
	},
	phone: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	birthdate: {
		type: DataTypes.DATE,
		allowNull: false
	},
	account_state: {
		type: DataTypes.ENUM(AccountStatusType.ACTIVE, AccountStatusType.DISABLED)
	},
	register_date: {
		type: DataTypes.DATE
	}
}, {
	timestamps: false,
	freezeTableName: true
});

Account.removeAttribute("id");

module.exports = {Account};

