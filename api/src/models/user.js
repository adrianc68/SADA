const {sequelize} = require("../config/db");
const {DataTypes} = require("sequelize");
const {Account} = require("./account");
const {Role} = require("./role");
const {Business} = require("./business");
const {UserBusiness} = require("./userBusiness"); 
const {UserRole} = require("./userRole");

const User = sequelize.define("User", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: DataTypes.STRING
	},
	address: {
		type: DataTypes.STRING
	},
	id_role: {
		type: DataTypes.INTEGER
	}
}, {
	timestamps: false,
	freezeTableName: true
});

User.hasOne(Account, {
	foreignKey: "id_user",
	targetKey: "id",
	onDelete: "CASCADE",
	onUpdate: "CASCADE"
});

Account.belongsTo(User, {
	foreignKey: "id_user",
	targetKey: "id",
	onDelete: "CASCADE",
	onUpdate: "CASCADE"
});

User.belongsToMany(Role, {through: UserRole, foreignKey: "id_user"});
Role.belongsToMany(User, {through: UserRole, foreignKey: "id_role"});

User.belongsToMany(Business, {through: UserBusiness, foreignKey: "id_role"});
Business.belongsToMany(User, {through: UserBusiness, foreignKey: "id_business"});

module.exports = {User};

