const {sequelize} = require("../config/db");
const {DataTypes} = require("sequelize");
const {Business} = require("./business");
const {MeasurementUnitType} = require("./types/measurementUnitType");
const {ProductCategory} = require("./productCategory");
const {Category} = require("./category");
const {Supply} = require("./supply");

const Product = sequelize.define("Product", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true
	},
	description: {
		type: DataTypes.STRING,
	},
	name: {
		type: DataTypes.STRING
	},
	sale_price: {
		type: DataTypes.FLOAT,
	},
	measurement_unit: {
		type: DataTypes.ENUM(MeasurementUnitType.PIECE, MeasurementUnitType.KILOGRAM, MeasurementUnitType.GRAM, MeasurementUnitType.LITER, MeasurementUnitType.MILILITER),
	},
	id_business: {
		type: DataTypes.INTEGER
	},
	id_category: {
		type: DataTypes.INTEGER
	}
}, {
	freezeTableName: true,
	timestamps: false
});

Product.belongsToMany(Category, {through: ProductCategory, foreignKey: "id_product"});
Category.belongsToMany(Product, {through: ProductCategory, foreignKey: "id_category"});

Product.hasMany(Supply, {
foreignKey: "id_product",
	sourceKey: "id",
	onDelete: "SET NULL",
	onUpdate: "SET NULL"
});

Supply.belongsTo(Product, {
	foreignKey: "id_product",
	targetKey: "id",
	onDelete: "SET NULL",
	onUpdate: "SET NULL"
});

module.exports = { Product };

