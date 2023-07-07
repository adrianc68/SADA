require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const {logger} = require("./helpers/logger");
const { sequelize } = require("./config/db");

app.set("port", process.env.SV_PORT);
app.set("host", process.env.SV_HOST);

//middlewares

app.disable("x-powered-by");
app.use(helmet());
app.use(cors());


app.disable("etag");
app.use(morgan("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(require("./routers/user"));
app.use(require("./routers/business"));
app.use(require("./routers/auth"));

const connectToServer = async () => {
	await sequelize.sync({ force: false}).then(() => {
		console.log('Database synchronized successfully.');
	}).catch(error => {
		console.log('Error', error);
	});

	await sequelize.authenticate().then(async() => {
		logger.info(`PostgreSQL client initialized on port ${sequelize.config.port}`);
	}).catch(error => {
		logger.fatal(error);
	});
}

module.exports = { app, connectToServer}
