const {logger } = require("../helpers/logger");
const {httpResponseInternalServerError, httpResponseOk} = require("../helpers/httpResponses");
const {getAllUsers, getBusinessWorkingOfUser } = require("../services/dataaccess/user");

const getAllUsersController = async (request, response ) => {
	let users;
	try {
		users = await getAllUsers();
	} catch (e) {
		return httpResponseInternalServerError(response, e);
	}
	return httpResponseOk(response, users);
}

const getBusinessOfUser = async (request, response) => {
	const id = request.params.id;
	let business;
	try {
		let data = await getBusinessWorkingOfUser(id);
		console.log(data);
	} catch (e) {
		return httpResponseInternalServerError(response, e);
	}

	return httpResponseOk(response, business);
}

module.exports = {getAllUsersController, getBusinessOfUser};
