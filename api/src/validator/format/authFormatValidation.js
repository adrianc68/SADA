const {httpResponseValidation} = require("../../helpers/httpResponses");
const {validateEmailData, validatePasswordData, validateAccessTokenParameterData, validateRefreshTokenParameterData, validateAuthorizationHeaderData} = require("./validations");

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

const accessTokenAuthorizationTokenValidateFormat = [
    validateAuthorizationHeaderData,
    (request, response, next) => {
        return httpResponseValidation(request, response, next);
    }
];

module.exports = {
	loginValidateFormat, accessTokenParameterValidateFormat, refreshTokenParameterValidateFormat, accessTokenAuthorizationTokenValidateFormat
}
