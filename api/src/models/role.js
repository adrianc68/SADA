const {sequelize} = require("../config/db");
const {DataTypes} = require("sequelize");
const {Business} = require("./business");

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
	id_business: {
		type: DataTypes.INTEGER,
	}
}, {
	freezeTableName: true,
	timestamps: false
});


Role.belongsTo(Business, {
	foreignKey: "id_business",
	sourceKey: "id",
	onDelete: "CASCADE",
	onUpdate: "CASCADE"
});

 Business.hasMany(Role, {
	foreignKey: "id_business",
	sourceKey: "id"
});

module.exports = {Role}

