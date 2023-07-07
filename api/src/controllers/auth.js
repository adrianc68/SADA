const httpMessageCodes = require("../helpers/constants/httpMessageCodes");
const {httpResponseOk, httpResponseInternalServerError, httpResponseUnauthorized} = require("../helpers/httpResponses");
const {generateTokens} = require("../services/dataaccess/tokenDataAccess");

const createTokens = async (request, response) => {
	const userData = request.locals.data;
	let tokens = await generateTokens(userData.id);
	return httpResponseOk(response, tokens);
};

module.exports = {createTokens}
