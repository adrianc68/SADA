const {httpMessageCodes} = require("../../helpers/constants/httpMessageCodes");
const {encondeSHA256} = require("../../helpers/crypt");
const {httpResponseInternalServerError, httpResponseForbidden} = require("../../helpers/httpResponses");
const {AccountStatusType} = require("../../models/types/accountStateType");
const {getAccountLoginData} = require("../../services/dataaccess/account");


const loginDataValidation = async (request, response, next) => {
	const {email, password} = request.body;
	request.locals = {};
	try {
		let userData = await getAccountLoginData(email);

		if (!userData) {
			return httpResponseForbidden(response, httpMessageCodes.INVALID_CREDENTIALS);
		}
		if (userData.account_state == AccountStatusType.DISABLED) {
			return httpResponseForbidden(response, httpMessageCodes.ACCOUNT_DISABLED);
		}
		if (!doesPasswordMatch(password, userData.password)) {
			return httpResponseForbidden(response, httpMessageCodes.INVALID_CREDENTIALS);
		} else {
			request.locals.data = userData
			return next();
		}
	} catch (error) {
		return httpResponseInternalServerError(response, error);
	}
};

// const validationAccesTokenDataAsAuthorization = async (request, response, next) => {
//     let accessToken = (request.headers.authorization).split(" ")[1];
//     try {
//         await getTokenExist(accessToken, TOKEN_TYPE.ACCESS);
//     } catch (error) {
//         return httpResponseUnauthorized(response);
//     }
//     return next();
// };

// const validationRefreshTokenDataAsAuthorization = async (request, response, next) => {
//     let refreshToken = (request.headers.authorization).split(" ")[1];
//     try {
//         await getTokenExist(refreshToken, TOKEN_TYPE.REFRESH);
//     } catch (error) {
//         return httpResponseUnauthorized(response);
//     }
//     return next();
// };

// const validationRefreshTokenDataAsParameter = async (request, response, next) => {
//     let refreshToken = (request.headers.refreshtoken).split(" ")[1];
//     try {
//         await getTokenExist(refreshToken, TOKEN_TYPE.REFRESH);
//     } catch (error) {
//         return httpResponseUnauthorized(response);
//     }
//     return next();
// };

// const validationAccesTokenDataAsOptionalAuthorization = async (request, response, next) => {
//     let accessToken = request.headers.authorization;
//     if (accessToken == null) {
//         return next();
//     }
//     accessToken = accessToken.split(" ")[1];
//     try {
//         await getTokenExist(accessToken, TOKEN_TYPE.ACCESS);
//     } catch (error) {
//         return httpResponseUnauthorized(response);
//     }
//     return next();
// };

// const checkRolesAuth = (roles) => async (request, response, next) => {
//     const token = (request.headers.authorization).split(" ")[1];
//     let userData;
//     try {
//         userData = (await verifyToken(token)).userRole;
//     } catch (error) {
//         return httpResponseInternalServerError(response, error);
//     }
//     let rolesAllowed = [].concat(roles);
//     if (!rolesAllowed.includes(userRoleData)) {
//         return httpResponseUnauthorized(response)
//     }
//     return next();
// };

const doesPasswordMatch = (password, passwordCrypted) => {
	let doesPasswordMatch = false;
	if (encondeSHA256(password) == passwordCrypted) {
		doesPasswordMatch = true;
	}
	return doesPasswordMatch;
}


module.exports = {
	loginDataValidation
}
