const {logger} = require("./helpers/logger")
const {app, connectToServer} = require("./app")

const server = app.listen({
	port: app.get("port"),
	host: app.get("host")
}, async () => {
	if (process.env.NODE_ENV == "TEST") {
		logger.info("************** TEST ENVIRONMENT **************");
		logger.info(`NodeJS Express Server initialized on port ${app.get("port")}`);
	} else {
		logger.info("************** PROD ENVIRONMENT **************");
		logger.info(`NodeJS Express Server initialized on port ${app.get("port")}`);
	}
});

