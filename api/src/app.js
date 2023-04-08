require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const {logger} = require("./helpers/logger");

app.set("port", process.env.SV_PORT);
app.set("host", process.env.SV_HOST);

//middlewares

app.disable("x-powered-by");
app.use(helmet());
app.use(cors());
app.disable("etag");
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const connectToServer = async () => {
	
}


module.exports = { app, connectToServer}
