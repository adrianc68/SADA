const {httpResponseValidation} = require("../../helpers/httpResponses");
const {validateEmailData, validatePasswordData, validateAccessTokenParameterData, validateRefreshTokenParameterData} = require("./validations");

const loginValidateFormat = [
	validateEmailData,
	validatePasswordData,
	(request, response, next) => {
		return httpResponseValidation(request, response, next);
	}
];

const accessTokenParameterValidateFormat = [
	validateAccessTokenParameterData,
	(request, response, next) => {
		return httpResponseValidation(request, response, next);
	}
];

const refreshTokenParameterValidateFormat = [
	validateRefreshTokenParameterData,
	(request, response, next) => {
		return httpResponseValidation(request, response, next);
	}
];

module.exports = {
	loginValidateFormat, accessTokenParameterValidateFormat, refreshTokenParameterValidateFormat
}
