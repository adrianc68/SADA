const {logger } = require("../helpers/logger");
const {httpResponseInternalServerError, httpResponseOk} = require("../helpers/httpResponses");
const {getAllUsers } = require("../services/dataaccess/user");

const getAllUsersController = async (request, response ) => {
	let users;
	try {
		users = await getAllUsers();
	} catch (e) {
		return httpResponseInternalServerError(response, e);
	}
	return httpResponseOk(response, users);
}

module.exports = {getAllUsersController};
