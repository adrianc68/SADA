const {httpMessageCodes} = require("../../helpers/constants/httpMessageCodes");
const {encondeSHA256} = require("../../helpers/crypt");
const {httpResponseInternalServerError, httpResponseForbidden} = require("../../helpers/httpResponses");
const {AccountStatusType} = require("../../models/types/accountStateType");
const {getAccountLoginData} = require("../../services/dataaccess/account");


const loginDataValidation = async (request, response, next) => {
	const {email, password} = request.body;
	try {
		await getAccountLoginData(email).then(data => {
			if(!data) {
				return httpResponseForbidden(response, httpMessageCodes.INVALID_CREDENTIALS);
			}
			if (data.account_status == AccountStatusType.DISABLED) {
				return httpResponseForbidden(response, httpMessageCodes.ACCOUNT_DISABLED);
			}
			if (doesPasswordMatch(password, data.password)) {
				return next();
			} else {
				return httpResponseForbidden(response, httpMessageCodes.INVALID_CREDENTIALS);
			}
		});
	} catch (error) {
		return httpResponseInternalServerError(response, error);
	}
};

const doesPasswordMatch = (password, passwordCrypted) => {
	let doesPasswordMatch = false;
	if(encondeSHA256(password) == passwordCrypted) {
		doesPasswordMatch = true;
	}
	return doesPasswordMatch;
}

module.exports = {
	loginDataValidation
}
