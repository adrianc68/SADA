const {sequelize} = require("../config/db");
const {DataTypes} = require("sequelize");
const {Business} = require("./business");
const {Product} = require("./product");

const SaleNote = sequelize.define("SaleNote", {
	register_date: {
		type: DataTypes.DATE
	},
	total_amount: {
		type: DataTypes.FLOAT
	},
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true
	},
	id_business: {
		type: DataTypes.INTEGER
	},
	id_product: {
		type: DataTypes.INTEGER
	}
}, {
	freezeTableName: true,
	timestamps: false
});

Business.hasMany(SaleNote, {
	foreignKey: "id_business",
	sourceKey: "id",
	onDelete: "CASCADE",
	onUpdate: "CASCADE"
});

SaleNote.belongsTo(Business, {
	foreignKey: "id_business",
	targetKey: "id",
});




module.exports = {SaleNote};
