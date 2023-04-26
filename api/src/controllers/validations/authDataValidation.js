const {httpResponseInternalServerError} = require("../../helpers/httpResponses");
const {AccountStatusType} = require("../../models/types/accountStateType");
const {getAccountLoginData} = require("../../services/dataaccess/account");


const loginDataValidation = async (request, response, next) => {
	const {email, password} = request.body;
	try {
		await getAccountLoginData(email).then(data => {
			console.log(data); /////////////////////// SAVE ME
			FROM DIE
			if (userData.account_status == AccountStatusType.DISABLED) {
				return httpResponseForbidden(response, "user has been disabled");
			}
			if (doesPasswordMatch(encondePassword(password), userData.password)) {
				return next();
			} else {
				return httpResponseForbidden(response, "password does not match");
			}

		});
	} catch (error) {
		return httpResponseInternalServerError(response, error);
	}
	return next();;
};

module.exports = {
	loginDataValidation
}
