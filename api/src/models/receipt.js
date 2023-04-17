const {sequelize} = require("../config/db");
const {DataTypes} = require("sequelize");
const {Business} = require("./business");

const Receipt = sequelize.define("Receipt", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING
	},
	concept: {
		type: DataTypes.STRING
	},
	end_date: {
		type: DataTypes.DATE
	},
	start_date: {
		type: DataTypes.DATE
	},
	register_date: {
		type: DataTypes.DATE
	},
	amount: {
		type: DataTypes.FLOAT
	},
	id_business: {
		type: DataTypes.INTEGER
	}
}, {
	freezeTableName: true,
	timestamps: false
});

Receipt.belongsTo(Business, {
	foreignKey: "id_business",
	sourceKey: "id",
	onDelete: "CASCADE",
	onUpdate: "CASCADE"
});

Business.hasMany(Receipt, {
	foreignKey: "id_business",
	sourceKey: "id"
})

