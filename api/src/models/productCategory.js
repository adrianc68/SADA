const {sequelize} = require("../config/db");
const {DataTypes} = require("sequelize");

const ProductCategory = sequelize.define("ProductCategory", {
	id_category: {
		type: DataTypes.INTEGER,
	},
	id_product: {
		type: DataTypes.INTEGER,
	},
}, {
	freezeTableName: true,
	timestamps: false
});

module.exports = {ProductCategory};


