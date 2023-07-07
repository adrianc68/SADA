const {accessTokenAuthorizationTokenValidateFormat} = require("../validator/format/authFormatValidation");

const checkAccessToken = (roles) => Router().use([
	accessTokenAuthorizationTokenValidateFormat,
	validationAccesTokenDataAsAuthorization
]);

module.exports = {checkAccessToken}
