const httpMessageCodes = require("../helpers/constants/httpMessageCodes");
const {httpResponseOk, httpResponseInternalServerError, httpResponseUnauthorized} = require("../helpers/httpResponses");

const createTokens = async (request, response) => {
	let {email} = request.body;
	let tokens = {
		accessToken: "holacomoestas",
		refreshToken: "comoestanadios"
	};
	// try {
	//     let userData = await getAccountLoginData(emailOrUsername);
	//     let device_info = request.headers.host;
	//     tokens = await generateTokens(userData.id, userData.role, device_info);
	// } catch (error) {
	//     return httpResponseInternalServerError(response, error);
	// }
	//
	return httpResponseOk(response, tokens);
};

module.exports = {createTokens}
