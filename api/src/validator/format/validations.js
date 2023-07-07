const {check, body, header} = require('express-validator');
const {validationFormMessage} = require('./constants');

const validateEmailData = [
	check("email")
		.trim()
		.not()
		.isEmpty()
		.withMessage(validationFormMessage.REQUIRED_EMAIL)
		.bail()
		.isLength({min: 3, max: 254})
		.withMessage(validationFormMessage.INVALID_LENGTH_EMAIL)
		.bail()
		.isEmail()
		.normalizeEmail()
		.withMessage(validationFormMessage.INVALID_FORMAT_EMAIL)
];

const validateNameData = [
	check("name")
		.trim()
		.not()
		.isEmpty()
		.withMessage(validationFormMessage.REQUIRED_NAME)
		.bail()
		.isLength({min: 3, max: 64})
		.withMessage(validationFormMessage.INVALID_LENGTH_NAME)
		.bail()
		.matches(/^[a-zA-Zñ]+(\ ([a-zA-Zñ]+))*$/)
		.withMessage(validationFormMessage.INVALID_FORMAT_NAME)
];

const validatePasswordData = [
	check("password")
		.not()
		.isEmpty()
		.withMessage(validationFormMessage.REQUIRED_PASSWORD)
		.bail()
		.isLength({min: 6, max: 128})
		.withMessage(validationFormMessage.INVALID_LENGTH_PASSWORD)
];

const validatePhoneNumberData = [
	check("phoneNumber")
		.isLength({min: 8, max: 15})
		.withMessage(validationFormMessage.INVALID_LENGTH_PHONE_NUMBER)
		.matches(/^[\d]*$/)
		.withMessage(validationFormMessage.INVALID_FORMAT_PHONE_NUMBER)
];

const validateBirthdateData = [
	check("birthdate")
		.isISO8601('yyyy-mm-dd')
		.withMessage(validationFormMessage.INVALID_FORMAT_BIRTHDATE)
		.bail()
		.custom((value, {req}) => {
			return isValidDate(value);
		})
		.withMessage(validationFormMessage.INVALID_DATE)
];

const validateAuthorizationHeaderData = [
	header("authorization")
		.not()
		.isEmpty()
		.withMessage(validationFormMessage.REQUIRED_AUTHORIZATION_HEADER)
		.bail()
		.matches(/^Bearer\s{1}([^ ]+)$/)
		.withMessage(validationFormMessage.INVALID_FORMAT_TOKEN)
];

const validateAccessTokenParameterData = [
	header("accessToken")
		.not()
		.isEmpty()
		.withMessage(validationFormMessage.REQUIRED_ACCESS_TOKEN)
		.bail()
		.matches(/^Bearer\s{1}([^ ]+)$/)
		.withMessage(validationFormMessage.INVALID_FORMAT_TOKEN)
];

const validateRefreshTokenParameterData = [
	header("refreshToken")
		.not()
		.isEmpty()
		.withMessage(validationFormMessage.REQUIRED_REFRESH_TOKEN)
		.bail()
		.matches(/^Bearer\s{1}([^ ]+)$/)
		.withMessage(validationFormMessage.INVALID_FORMAT_TOKEN)
];

module.exports = {validateEmailData, validateNameData, validatePasswordData, validatePhoneNumberData, validateBirthdateData, validateAuthorizationHeaderData, validateAccessTokenParameterData, validateRefreshTokenParameterData};
